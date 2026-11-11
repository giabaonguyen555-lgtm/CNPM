import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./App";
import { HeritageProvider } from "./core/context/HeritageContext";
import { AudioProvider } from "./core/context/AudioPlayerContext";
import { AuthProvider } from "./core/context/AuthContext";
import { PaymentProvider } from "./core/context/PaymentContext";
import ErrorBoundary from "./components/ErrorBoundary";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <AuthProvider>
        <PaymentProvider>
          <HeritageProvider>
            <AudioProvider>
              <App />
            </AudioProvider>
          </HeritageProvider>
        </PaymentProvider>
        </AuthProvider>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>,
);
