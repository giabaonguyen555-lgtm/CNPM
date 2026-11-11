export function mapPoiRows(rows) {
  const map = new Map();
  for (const row of rows) {
    let poi = map.get(row.id);
    if (!poi) {
      poi = { id: row.id, category: row.danh_muc, district: row.quan_huyen, year: row.nam_di_san, duration: Number(row.thoi_luong_phut || 0), coordinates: [Number(row.vi_do), Number(row.kinh_do)], image: row.duong_dan_hinh_anh || "", status: row.trang_thai, allowTts: row.cho_phep_tts, name: {}, description: {}, highlights: {}, audio: {} };
      map.set(row.id, poi);
    }
    if (row.ngon_ngu_ma) { poi.name[row.ngon_ngu_ma] = row.ten || ""; poi.description[row.ngon_ngu_ma] = row.mo_ta || ""; poi.highlights[row.ngon_ngu_ma] = row.diem_noi_bat || []; if (row.audio_duong_dan) poi.audio[row.ngon_ngu_ma] = row.audio_duong_dan; }
  }
  return [...map.values()];
}
