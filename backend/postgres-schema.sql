CREATE TABLE IF NOT EXISTS ngon_ngu (
  ma VARCHAR(20) PRIMARY KEY,
  ten VARCHAR(80) NOT NULL
);

CREATE TABLE IF NOT EXISTS poi (
  id VARCHAR(120) PRIMARY KEY,
  danh_muc VARCHAR(80) NOT NULL,
  quan_huyen VARCHAR(100),
  nam_di_san VARCHAR(40),
  thoi_luong_phut NUMERIC(8,2),
  vi_do NUMERIC(10,7),
  kinh_do NUMERIC(10,7),
  duong_dan_hinh_anh TEXT,
  trang_thai VARCHAR(20) NOT NULL DEFAULT 'draft',
  cho_phep_tts BOOLEAN NOT NULL DEFAULT FALSE,
  ngay_tao TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ngay_cap_nhat TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS poi_ngon_ngu (
  poi_id VARCHAR(120) REFERENCES poi(id) ON DELETE CASCADE,
  ngon_ngu_ma VARCHAR(20) REFERENCES ngon_ngu(ma),
  ten VARCHAR(255),
  mo_ta TEXT,
  diem_noi_bat JSONB NOT NULL DEFAULT '[]',
  PRIMARY KEY (poi_id, ngon_ngu_ma)
);

CREATE TABLE IF NOT EXISTS poi_audio (
  poi_id VARCHAR(120) REFERENCES poi(id) ON DELETE CASCADE,
  ngon_ngu_ma VARCHAR(20) REFERENCES ngon_ngu(ma),
  duong_dan_file TEXT NOT NULL,
  PRIMARY KEY (poi_id, ngon_ngu_ma)
);

CREATE TABLE IF NOT EXISTS thanh_toan (
  id VARCHAR(120) PRIMARY KEY,
  phuong_thuc VARCHAR(20) NOT NULL,
  ten_nguoi_tra VARCHAR(255),
  chi_tiet_nguoi_tra VARCHAR(255),
  so_tien INTEGER NOT NULL,
  don_vi_tien VARCHAR(10) NOT NULL DEFAULT 'VND',
  trang_thai VARCHAR(20) NOT NULL,
  ma_truy_cap VARCHAR(80),
  ly_do_loi TEXT,
  ngay_tao TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS ma_truy_cap (
  ma VARCHAR(80) PRIMARY KEY,
  ma_hash CHAR(64) UNIQUE NOT NULL,
  thanh_toan_id VARCHAR(120) REFERENCES thanh_toan(id) ON DELETE SET NULL,
  trang_thai VARCHAR(20) NOT NULL,
  thoi_diem_tao TIMESTAMPTZ,
  thoi_diem_kich_hoat TIMESTAMPTZ,
  thoi_diem_het_han TIMESTAMPTZ,
  thoi_diem_thu_hoi TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS su_kien_thong_ke (
  id BIGSERIAL PRIMARY KEY,
  loai_su_kien VARCHAR(40) NOT NULL,
  poi_id VARCHAR(120) REFERENCES poi(id) ON DELETE SET NULL,
  ngon_ngu VARCHAR(20),
  nguon VARCHAR(40),
  ma_phien VARCHAR(120),
  thoi_diem_tao TIMESTAMPTZ NOT NULL
);

INSERT INTO ngon_ngu (ma, ten) VALUES
 ('vi', 'Tiếng Việt'), ('en', 'English'), ('fr', 'Français'),
 ('ja', '日本語'), ('ko', '한국어'), ('zh-CN', '中文')
ON CONFLICT (ma) DO NOTHING;

CREATE INDEX IF NOT EXISTS idx_ma_truy_cap_trang_thai ON ma_truy_cap(trang_thai);
CREATE INDEX IF NOT EXISTS idx_thanh_toan_ngay_tao ON thanh_toan(ngay_tao);
CREATE INDEX IF NOT EXISTS idx_su_kien_poi ON su_kien_thong_ke(poi_id);
