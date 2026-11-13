import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useHeritage, getHighlights, resolveMediaUrl } from "./HeritageContext";
import { usePayment } from "./PaymentContext";
import { trackEvent } from "../analytics";

const AudioContext = createContext(null);
const speechLang = { vi: "vi-VN", en: "en-US", fr: "fr-FR", ja: "ja-JP", ko: "ko-KR", "zh-CN": "zh-CN" };

const transcript = (site, selectedLanguage = "en") => {
  const description = site?.description?.[selectedLanguage] || site?.description?.vi || site?.description?.en || "";
  return [description, getHighlights(site, selectedLanguage).join(". "), "Explore the layers of Hanoi history, architecture, memory and living culture through this audio guide."]
    .filter(Boolean).join(" ");
};

const audioSourceFor = (site, selectedLanguage) => {
  const value = site?.audio;
  if (!value) return "";
  return resolveMediaUrl(typeof value === "string" ? value : value[selectedLanguage] || "");
};

export function AudioProvider({ children }) {
  const [current, setCurrent] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const { addListened, language: siteLanguage } = useHeritage();
  const { hasAccess, verifyAccess } = usePayment();
  const [language, setLanguageState] = useState(siteLanguage);
  const audio = useRef(null);
  const speech = useRef(null);
  const speechTimer = useRef(null);
  const session = useRef(0);
  const languageRef = useRef(language);
  const listenedSession = useRef(null);
  const startedRef = useRef(null);
  const completedRef = useRef(null);
  const userPaused = useRef(false);

  const setLanguage = (next) => {
    const normalized = next === "zh" ? "zh-CN" : next;
    languageRef.current = normalized;
    setLanguageState(normalized);
  };
  const clearSpeechTimer = () => {
    if (speechTimer.current) window.clearInterval(speechTimer.current);
    speechTimer.current = null;
  };
  const detachAudio = (player = audio.current) => {
    if (!player) return;
    player.onloadedmetadata = null;
    player.ontimeupdate = null;
    player.onended = null;
    player.onerror = null;
    player.onplay = null;
    player.onpause = null;
    player.pause();
    const source = player.currentSrc || player.src;
    if (source.startsWith("blob:") && typeof URL !== "undefined") URL.revokeObjectURL(source);
    player.removeAttribute("src");
    player.load();
    if (audio.current === player) audio.current = null;
  };
  const cleanupMedia = () => {
    clearSpeechTimer();
    window.speechSynthesis?.cancel();
    detachAudio();
    speech.current = null;
  };
  const stop = (clearCurrent = false) => {
    session.current += 1;
    cleanupMedia();
    setStatus(clearCurrent ? "idle" : "paused");
    if (clearCurrent) {
      setCurrent(null);
      setProgress(0);
      setDuration(0);
      setError("");
      listenedSession.current = null;
    }
  };
  const markStarted = (site) => {
    const key = `${site.id}:${languageRef.current}`;
    if (startedRef.current === key) return;
    startedRef.current = key;
    trackEvent("audio_started", { poiId: site.id, language: languageRef.current });
    if (listenedSession.current !== site.id) {
      listenedSession.current = site.id;
      addListened(site.id);
    }
  };
  const markCompleted = (site) => {
    const key = `${site.id}:${languageRef.current}`;
    if (completedRef.current === key) return;
    completedRef.current = key;
    trackEvent("audio_completed", { poiId: site.id, language: languageRef.current });
  };
  const startSpeech = (site, token, from = 0) => {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setStatus("error");
      setError("Speech audio is not supported by this browser.");
      return;
    }
    clearSpeechTimer();
    const total = Math.max(1, Number(site.duration) * 60);
    const chunks = transcript(site, languageRef.current).match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [""];
    let index = 0;
    const speakNext = () => {
      if (token !== session.current) return;
      const utterance = new SpeechSynthesisUtterance(chunks[index++]?.trim() || "");
      utterance.lang = speechLang[languageRef.current] || "en-US";
      utterance.rate = rate;
      utterance.volume = volume;
      speech.current = utterance;
      utterance.onend = () => {
        if (token !== session.current) return;
        if (index < chunks.length) return speakNext();
        clearSpeechTimer();
        setProgress(100);
        setStatus("ended");
        markCompleted(site);
      };
      utterance.onerror = (event) => {
        if (token !== session.current || event.error === "canceled") return;
        clearSpeechTimer();
        setStatus("error");
        setError("Unable to play speech audio.");
      };
      window.speechSynthesis.speak(utterance);
    };
    setDuration(total);
    setProgress(from);
    speakNext();
    speechTimer.current = window.setInterval(() => {
      if (token !== session.current) return;
      setProgress((value) => Math.min(99, value + (100 / total) * 0.25 * rate));
    }, 250);
    setStatus("playing");
    markStarted(site);
  };
  const start = (site, from = 0) => {
    if (!hasAccess) {
      setError("Complete the symbolic payment to unlock audio.");
      setStatus("locked");
      return false;
    }
    stop();
    const token = session.current;
    const source = audioSourceFor(site, languageRef.current);
    setCurrent(site);
    setProgress(from);
    setError("");
    if (!source) {
      setStatus("idle");
      startSpeech(site, token, from);
      return true;
    }
    const player = new Audio();
    player.preload = "auto";
    player.volume = volume;
    player.playbackRate = rate;
    audio.current = player;
    player.onloadedmetadata = () => {
      if (token !== session.current || audio.current !== player) return;
      const actualDuration = Number.isFinite(player.duration) ? player.duration : 0;
      setDuration(actualDuration || Number(site.duration) * 60 || 0);
      if (from > 0 && actualDuration > 0) player.currentTime = Math.min(from / 100 * actualDuration, Math.max(0, actualDuration - 0.05));
    };
    player.ontimeupdate = () => {
      if (token !== session.current || audio.current !== player) return;
      const actualDuration = Number.isFinite(player.duration) ? player.duration : 0;
      if (!actualDuration) return;
       setDuration(actualDuration);
       const nextProgress = Math.min(100, player.currentTime / actualDuration * 100);
       setProgress(nextProgress);
       // Some mobile browsers do not reliably dispatch `ended`; count completion at the end boundary too.
       if (nextProgress >= 99.5) markCompleted(site);
     };
    player.onplay = () => {
      if (token === session.current && audio.current === player) {
        setStatus("playing");
        markStarted(site);
      }
    };
    player.onpause = () => {
      if (token !== session.current || audio.current !== player || status === "ended") return;
      setStatus("paused");
    };
    player.onended = () => {
      if (token !== session.current || audio.current !== player) return;
      setProgress(100);
      setStatus("ended");
      markCompleted(site);
    };
    const fallbackToSpeech = (message) => {
      if (token !== session.current || audio.current !== player) return;
      const fallbackProgress = Number.isFinite(player.duration) && player.duration > 0
        ? player.currentTime / player.duration * 100
        : from;
      detachAudio(player);
      setError(message);
      startSpeech(site, token, fallbackProgress);
    };
    player.onerror = () => fallbackToSpeech("Uploaded audio cannot be decoded by this browser. Using speech narration instead.");
    userPaused.current = false;
    setStatus("loading");
    player.src = source;
    player.load();
    player.play().catch(() => {
      if (token !== session.current || audio.current !== player) return;
      const fallbackProgress = Number.isFinite(player.duration) && player.duration > 0
        ? player.currentTime / player.duration * 100
        : from;
      detachAudio(player);
      setError("Uploaded audio was blocked by the browser. Using speech narration instead.");
      startSpeech(site, token, fallbackProgress);
    });
    return true;
  };
  const play = (site) => {
     if (!hasAccess) {
       setError("Complete the symbolic payment to unlock audio.");
       setStatus("locked");
       return false;
     }
    // Re-check with the server on every play so a revoked code locks without waiting for the 30s poll.
    verifyAccess();
    if (current?.id !== site.id) return start(site);
    if (status === "playing") {
      userPaused.current = true;
      if (audio.current) audio.current.pause();
      else window.speechSynthesis?.pause();
      clearSpeechTimer();
      setStatus("paused");
      return true;
    }
    if (status === "ended") return start(site);
    if (audio.current) {
      userPaused.current = false;
      const player = audio.current;
      player.play().then(() => setStatus("playing")).catch(() => {
        if (audio.current !== player) return;
        detachAudio(player);
        setError("Uploaded audio was blocked by the browser. Using speech narration instead.");
        startSpeech(site, session.current, progress);
      });
      return true;
    }
    if (speech.current) {
      userPaused.current = false;
      window.speechSynthesis.resume();
      setStatus("playing");
      return true;
    }
    return start(site, progress);
  };
  const retry = () => current && start(current, progress >= 100 ? 0 : progress);
  const seek = (value) => {
    const next = Math.max(0, Math.min(100, Number(value) || 0));
    setProgress(next);
    if (audio.current && Number.isFinite(audio.current.duration)) audio.current.currentTime = next / 100 * audio.current.duration;
  };
  const seekSeconds = (seconds) => {
    if (!current) return;
    if (audio.current && Number.isFinite(audio.current.duration)) {
      audio.current.currentTime = Math.max(0, Math.min(audio.current.duration, audio.current.currentTime + seconds));
    } else {
      seek(progress + seconds / (duration || Number(current.duration) * 60 || 1) * 100);
    }
  };

  useEffect(() => {
    if (siteLanguage !== languageRef.current) setLanguage(siteLanguage);
  }, [siteLanguage]);
  useEffect(() => {
    if (!hasAccess && (audio.current || speech.current)) stop(true);
  }, [hasAccess]);
  useEffect(() => {
    if (audio.current) {
      audio.current.volume = volume;
      audio.current.playbackRate = rate;
    }
    if (speech.current) {
      speech.current.rate = rate;
      speech.current.volume = volume;
    }
  }, [volume, rate]);
  useEffect(() => () => {
    session.current += 1;
    cleanupMedia();
  }, []);

  return <AudioContext.Provider value={{ current, status, playing: status === "playing", loading: status === "loading", error, play, retry, stop, closePlayer: () => stop(true), togglePlay: () => current && play(current), setPlaying: (value) => value ? play(current) : stop(), rate, setRate, volume, setVolume, progress, seek, seekSeconds, duration, language, setLanguage, transcript, hasAccess }}>{children}</AudioContext.Provider>;
}
export const useAudio = () => useContext(AudioContext);
