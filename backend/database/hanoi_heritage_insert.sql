--
-- PostgreSQL database dump
--

\restrict luBk4VJlicb9oQtCG3HBuHvrx0S9m1Pcl5LbG0glSGLpzq57elL5hJlWZgejn5q

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: thanh_toan; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-VT6W', 'bank', 'Phạm Quốc Bích', 'MB · ND HANOI VT6W', 50000, 'VND', 'paid', 'HANOI-N5WV-D9BU', NULL, '2026-11-02 00:57:20.098+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-HFDT', 'credit', 'HO NGOC HANH', 'Mastercard •••• 5047', 50000, 'VND', 'paid', 'HANOI-PZ8W-EX7L', NULL, '2026-11-02 00:56:42.411+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-LHFW', 'credit', 'HOANG GIA LONG', 'Mastercard •••• 5533', 50000, 'VND', 'paid', 'HANOI-MPFG-MTJE', NULL, '2026-11-02 00:49:28.201+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-J3B2', 'credit', 'PHAN NGOC DUNG', 'Mastercard •••• 5794', 50000, 'VND', 'paid', 'HANOI-DTGQ-C6QX', NULL, '2026-11-02 00:49:13.098+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-N4WP', 'credit', 'HO HUU GIANG', 'Mastercard •••• 2969', 50000, 'VND', 'paid', 'HANOI-3HDY-U8U5', NULL, '2026-11-02 00:13:13.143+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-4XA5', 'credit', 'LE MINH LAN', 'Mastercard •••• 4216', 50000, 'VND', 'paid', 'HANOI-NPUH-264U', NULL, '2026-11-02 00:12:03.218+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-JHNW', 'credit', 'BUI HOAI HUNG', 'Visa •••• 6904', 50000, 'VND', 'paid', 'HANOI-N7FY-CMYZ', NULL, '2026-10-26 01:15:16.085+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-F48F', 'credit', 'VO THI HANH', 'Visa •••• 0577', 50000, 'VND', 'paid', 'HANOI-XC6F-YHEP', NULL, '2026-10-25 19:48:56.059+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-AHXE', 'credit', 'PHAM THU LINH', 'Mastercard •••• 5239', 50000, 'VND', 'paid', 'HANOI-HNHD-Y6H4', NULL, '2026-10-25 19:48:38.536+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-KEXX', 'credit', 'HO THANH GIANG', 'Mastercard •••• 5850', 50000, 'VND', 'paid', 'HANOI-ZKMN-6FA6', NULL, '2026-10-25 19:42:10.665+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-WAHL', 'credit', 'DO DUC BINH', 'Mastercard •••• 6435', 50000, 'VND', 'paid', 'HANOI-AKZ4-P3GN', NULL, '2026-10-25 19:34:22.301+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-N2G3', 'credit', 'HUYNH VAN LONG', 'Mastercard •••• 1499', 50000, 'VND', 'paid', 'HANOI-23E8-UZ94', NULL, '2026-10-25 19:18:38.883+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-EJLK', 'bank', 'Lê Minh Vy', 'BIDV · ND HANOI EJLK', 50000, 'VND', 'paid', 'HANOI-GJJK-7YYK', NULL, '2026-10-25 18:06:11.355+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-NYXY', 'credit', 'DUONG NGOC CHI', 'Mastercard •••• 2962', 50000, 'VND', 'paid', 'HANOI-XZFD-72AL', NULL, '2026-10-25 15:28:14.816+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-BXZT', 'credit', 'LE THI GIANG', 'Mastercard •••• 5440', 50000, 'VND', 'paid', 'HANOI-QA9H-95KY', NULL, '2026-10-25 14:30:48.117+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-7TWZ', 'credit', 'NGUYEN THU LINH', 'Visa •••• 7465', 50000, 'VND', 'paid', 'HANOI-5EBJ-348J', NULL, '2026-10-25 12:44:02.464+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-VVWQ', 'credit', 'HOANG BAO BICH', 'Visa •••• 4170', 50000, 'VND', 'paid', 'HANOI-XGJV-PWFV', NULL, '2026-10-25 12:10:58.957+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261025-KQBZ', 'credit', 'LE THU QUAN', 'Visa •••• 2982', 50000, 'VND', 'paid', 'HANOI-KMR5-KUYJ', NULL, '2026-10-25 12:01:33.149+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261024-CYHB', 'credit', 'VU MINH VY', 'Mastercard •••• 6107', 50000, 'VND', 'paid', 'HANOI-HEGE-SYBZ', NULL, '2026-10-25 01:00:21.26+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261024-2BQL', 'credit', 'DO THU CHI', 'Mastercard •••• 8966', 50000, 'VND', 'paid', 'HANOI-FCJ7-5WD8', NULL, '2026-10-25 00:05:22.538+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261024-6CN8', 'credit', 'LY DUC QUAN', 'Visa •••• 5202', 50000, 'VND', 'paid', 'HANOI-ZV2L-AKG7', NULL, '2026-10-24 23:56:51.315+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-REVZ', 'credit', 'NGUYEN VAN AN', 'Visa •••• 6088', 50000, 'VND', 'paid', 'HANOI-JL3N-56P9', NULL, '2026-11-02 02:00:51.076+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-CHYE', 'credit', 'PHAM QUOC NAM', 'Visa •••• 6982', 50000, 'VND', 'paid', 'HANOI-BKTA-VGME', NULL, '2026-11-02 02:02:40.9+07');
INSERT INTO public.thanh_toan (id, phuong_thuc, ten_nguoi_tra, chi_tiet_nguoi_tra, so_tien, don_vi_tien, trang_thai, ma_truy_cap, ly_do_loi, ngay_tao) VALUES ('TXN-20261101-8V2Y', 'credit', 'NGUYEN VAN AN', 'Visa •••• 3591', 50000, 'VND', 'paid', 'HANOI-QLHK-HSDN', NULL, '2026-11-02 02:13:49.013+07');


--
-- Data for Name: ma_truy_cap; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.ma_truy_cap (ma, ma_hash, thanh_toan_id, trang_thai, thoi_diem_tao, thoi_diem_kich_hoat, thoi_diem_het_han, thoi_diem_thu_hoi) VALUES ('HANOI-YSDS-L6HT', '233236e4d9ef32bce819e52983835e5336e3ca9424b9b3559e2c4c5393259c2c', NULL, 'active', '2026-11-02 02:11:03.33+07', '2026-11-02 02:11:03.33+07', '2026-11-03 02:11:03.33+07', NULL);
INSERT INTO public.ma_truy_cap (ma, ma_hash, thanh_toan_id, trang_thai, thoi_diem_tao, thoi_diem_kich_hoat, thoi_diem_het_han, thoi_diem_thu_hoi) VALUES ('HANOI-QLHK-HSDN', 'e4dcc08848220ee5f13920aa21ca2dfcd093211cc75b8ba8b706fd7ddb5a2664', 'TXN-20261101-8V2Y', 'active', '2026-11-02 02:13:49.091+07', '2026-11-02 02:13:49.091+07', '2026-11-03 02:13:49.091+07', NULL);


--
-- Data for Name: ngon_ngu; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.ngon_ngu (ma, ten) VALUES ('vi', 'Tiếng Việt');
INSERT INTO public.ngon_ngu (ma, ten) VALUES ('en', 'English');
INSERT INTO public.ngon_ngu (ma, ten) VALUES ('fr', 'Français');
INSERT INTO public.ngon_ngu (ma, ten) VALUES ('ja', '日本語');
INSERT INTO public.ngon_ngu (ma, ten) VALUES ('ko', '한국어');
INSERT INTO public.ngon_ngu (ma, ten) VALUES ('zh-CN', '中文');


--
-- Data for Name: poi; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('hoan-kiem', 'Cultural', 'Hoan Kiem', '1010', 6.00, 21.0287000, 105.8523000, '/assets/images/landmarks/hoan-kiem.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('literature', 'Historical', 'Dong Da', '1070', 7.00, 21.0278000, 105.8356000, '/assets/images/landmarks/literature.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('citadel', 'Historical', 'Ba Dinh', '1010', 8.00, 21.0356000, 105.8413000, '/assets/images/landmarks/citadel.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('pagoda', 'Spiritual', 'Ba Dinh', '1049', 5.00, 21.0359000, 105.8327000, '/assets/images/landmarks/pagoda.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('mausoleum', 'Historical', 'Ba Dinh', '1975', 6.00, 21.0368000, 105.8347000, '/assets/images/landmarks/mausoleum.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('old-quarter', 'Cultural', 'Old Quarter', '1010', 9.00, 21.0340000, 105.8500000, '/assets/images/landmarks/old-quarter.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('tran-quoc', 'Spiritual', 'Tay Ho', '541', 6.00, 21.0486000, 105.8369000, '/assets/images/landmarks/tran-quoc.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('opera', 'Architectural', 'Hoan Kiem', '1911', 5.00, 21.0245000, 105.8572000, '/assets/images/landmarks/opera.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');
INSERT INTO public.poi (id, danh_muc, quan_huyen, nam_di_san, thoi_luong_phut, vi_do, kinh_do, duong_dan_hinh_anh, trang_thai, cho_phep_tts, ngay_tao, ngay_cap_nhat) VALUES ('cathedral', 'Architectural', 'Hoan Kiem', '1886', 5.00, 21.0288000, 105.8480000, '/assets/images/landmarks/cathedral.jpg', 'published', true, '2026-11-02 01:10:05.231581+07', '2026-11-02 01:10:05.231581+07');


--
-- Data for Name: poi_audio; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.poi_audio (poi_id, ngon_ngu_ma, duong_dan_file) VALUES ('hoan-kiem', 'vi', '/media/audio/hoan-kiem-vi-1792916927035-bec95d1d-13d8-4916-ad65-fe30f71ce649.mp3');
INSERT INTO public.poi_audio (poi_id, ngon_ngu_ma, duong_dan_file) VALUES ('hoan-kiem', 'en', '/media/audio/hoan-kiem-en-1792916927068-5909fedd-2509-4b4b-9b08-dafda7e8c75c.mp3');
INSERT INTO public.poi_audio (poi_id, ngon_ngu_ma, duong_dan_file) VALUES ('hoan-kiem', 'fr', '/media/audio/hoan-kiem-fr-1792920288585-5530dbe2-60a1-47a0-93bb-f9886f23f0e5.mp3');
INSERT INTO public.poi_audio (poi_id, ngon_ngu_ma, duong_dan_file) VALUES ('hoan-kiem', 'zh-CN', '/media/audio/hoan-kiem-zh-CN-1792920288626-a17af9b3-749e-40fc-b468-77526a3dd076.mp3');
INSERT INTO public.poi_audio (poi_id, ngon_ngu_ma, duong_dan_file) VALUES ('hoan-kiem', 'ja', '/media/audio/hoan-kiem-ja-1792920288660-96e0b4cf-79ec-4aa7-96e5-5db65c4399a8.mp3');
INSERT INTO public.poi_audio (poi_id, ngon_ngu_ma, duong_dan_file) VALUES ('hoan-kiem', 'ko', '/media/audio/hoan-kiem-ko-1792920348200-7f49e809-bce4-44e2-addc-81751c79dc7e.mp3');


--
-- Data for Name: poi_ngon_ngu; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('hoan-kiem', 'vi', 'Hồ Hoàn Kiếm & Đền Ngọc Sơn', 'Biểu tượng thanh lịch của Hà Nội, nơi truyền thuyết và đời sống đô thị giao hòa.', '["Đền Ngọc Sơn","Tháp Rùa","Truyền thuyết trả gươm","Phố đi bộ cuối tuần"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('hoan-kiem', 'en', 'Hoan Kiem Lake & Ngoc Son Temple', 'Hanoi’s elegant heart where legend meets everyday city life.', '["Ngoc Son Temple", "Turtle Tower", "Legend of the returned sword", "Weekend walking street"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('hoan-kiem', 'fr', 'Lac Hoan Kiem et temple Ngoc Son', 'Le cœur élégant de Hanoï, entre légende et vie urbaine.', '["Temple Ngoc Son","Tour de la Tortue","Légende de l''épée restituée","Rue piétonne du week-end"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('hoan-kiem', 'zh-CN', '还剑湖与玉山祠', '传说与城市生活交汇的河内之心。', '["玉山祠","龟塔","还剑传说","周末步行街"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('hoan-kiem', 'ja', 'ホアンキエム湖と玉山祠', '伝説と都市生活が交差するハノイの中心。', '["玉山祠","亀の塔","剣返還の伝説","週末の歩行者天国"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('hoan-kiem', 'ko', '호안끼엠 호수와 응옥선 사원', '전설과 도시의 삶이 만나는 하노이의 심장.', '["응옥선 사원","거북탑","검을 돌려준 전설","주말 보행자 거리"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('literature', 'vi', 'Văn Miếu - Quốc Tử Giám', 'Trường đại học đầu tiên của Việt Nam và biểu tượng truyền thống hiếu học.', '["Bia Tiến sĩ","Năm lớp sân","Kiến trúc Nho giáo","Khu vườn yên tĩnh"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('literature', 'en', 'Temple of Literature', 'Vietnam’s first university and a living symbol of scholarship.', '["Stelae of Doctors", "Five courtyards", "Confucian architecture", "Quiet gardens"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('literature', 'fr', 'Temple de la Littérature', 'La première université du Vietnam, symbole du savoir.', '["Stèles des docteurs","Cinq cours","Architecture confucéenne","Jardins paisibles"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('literature', 'zh-CN', '文庙与国子监', '越南第一所大学，学术传统的象征。', '["进士碑","五进院落","儒家建筑","静谧庭园"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('literature', 'ja', '文廟・國子監', 'ベトナム最初の大学、学問の象徴。', '["進士碑","五つの中庭","儒教建築","静かな庭園"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('literature', 'ko', '문묘-국자감', '베트남 최초의 대학이자 배움의 상징.', '["진사 비석","다섯 개의 안뜰","유교 건축","고요한 정원"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('citadel', 'vi', 'Hoàng Thành Thăng Long', 'Quần thể khảo cổ ghi dấu hơn một thiên niên kỷ lịch sử kinh đô.', '["Cổng Đoan Môn","Các tầng khảo cổ","Hầm D67","Di sản UNESCO"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('citadel', 'en', 'Imperial Citadel of Thang Long', 'An archaeological complex tracing over a millennium of capital history.', '["Doan Mon Gate", "Archaeological layers", "D67 bunker", "UNESCO heritage"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('citadel', 'fr', 'Citadelle impériale de Thang Long', 'Un complexe archéologique témoin de mille ans d’histoire.', '["Porte Doan Mon","Strates archéologiques","Bunker D67","Patrimoine de l''UNESCO"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('citadel', 'zh-CN', '升龙皇城', '见证千年都城历史的考古遗址。', '["端门","考古遗址层","D67地下指挥部","联合国教科文组织遗产"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('citadel', 'ja', 'タンロン皇城', '千年にわたる都の歴史を伝える遺跡。', '["端門","考古学的な地層","D67地下壕","ユネスコ世界遺産"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('citadel', 'ko', '탕롱 황성', '천 년 수도의 역사를 간직한 고고학 유적.', '["단몬 문","고고학 지층","D67 벙커","유네스코 유산"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('pagoda', 'vi', 'Chùa Một Cột', 'Ngôi chùa nhỏ độc đáo với kiến trúc như đóa sen vươn trên mặt nước.', '["Biểu tượng hoa sen","Khởi nguồn thời Lý","Sân chùa yên tĩnh","Điểm chụp ảnh đẹp"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('pagoda', 'en', 'One Pillar Pagoda', 'A tiny, iconic pagoda rising like a lotus above the water.', '["Lotus symbolism", "Ly dynasty origins", "Quiet courtyard", "Photography spot"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('pagoda', 'fr', 'Pagode au Pilier unique', 'Une pagode iconique en forme de lotus.', '["Symbolique du lotus","Origines de la dynastie Ly","Cour paisible","Spot photo"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('pagoda', 'zh-CN', '独柱寺', '如莲花般立于水上的标志性寺庙。', '["莲花象征","李朝起源","静谧庭院","摄影胜地"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('pagoda', 'ja', '一柱寺', '水面から蓮のように立つ象徴的な寺院。', '["蓮の象徴","李朝の起源","静かな境内","撮影スポット"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('pagoda', 'ko', '일주사', '물 위 연꽃처럼 솟은 상징적인 사찰.', '["연꽃의 상징","리 왕조의 기원","고요한 경내","사진 명소"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('mausoleum', 'vi', 'Lăng Chủ tịch Hồ Chí Minh', 'Không gian trang nghiêm giữa quảng trường Ba Đình lịch sử.', '["Quảng trường Ba Đình","Lễ đổi gác","Khu Phủ Chủ tịch","Lịch sử dân tộc"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('mausoleum', 'en', 'Ho Chi Minh Mausoleum', 'A solemn landmark on historic Ba Dinh Square.', '["Ba Dinh Square", "Guard ceremony", "Presidential garden", "National history"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('mausoleum', 'fr', 'Mausolée de Hô Chi Minh', 'Un lieu solennel sur l’historique place Ba Dinh.', '["Place Ba Dinh","Relève de la garde","Jardin présidentiel","Histoire nationale"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('mausoleum', 'zh-CN', '胡志明陵', '历史悠久的巴亭广场上的庄严地标。', '["巴亭广场","换岗仪式","主席府花园","国家历史"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('mausoleum', 'ja', 'ホーチミン廟', '歴史あるバーディン広場の荘厳なランドマーク。', '["バーディン広場","衛兵交代式","主席府の庭園","国の歴史"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('mausoleum', 'ko', '호찌민 묘소', '역사적인 바딘 광장의 장엄한 기념관.', '["바딘 광장","근위병 교대식","주석궁 정원","국가의 역사"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('old-quarter', 'vi', 'Khu Phố Cổ Hà Nội', 'Mê cung 36 phố phường, nơi ẩm thực và nghề thủ công sống động.', '["36 phố phường","Ẩm thực đường phố","Chợ đêm","Ban công kiểu Pháp"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('old-quarter', 'en', 'Hanoi Old Quarter', 'A maze of 36 guild streets alive with food and craft.', '["36 guild streets", "Street food", "Night market", "French balconies"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('old-quarter', 'fr', 'Vieux quartier de Hanoï', 'Un dédale de 36 rues de métiers, vibrant de saveurs.', '["Les 36 rues des corporations","Cuisine de rue","Marché de nuit","Balcons français"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('old-quarter', 'zh-CN', '河内老城区', '美食与手工艺交织的三十六行街。', '["三十六行街","街头美食","夜市","法式阳台"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('old-quarter', 'ja', 'ハノイ旧市街', '食と手工芸が息づく36通りの迷宮。', '["36の職人通り","屋台グルメ","ナイトマーケット","フランス風バルコニー"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('old-quarter', 'ko', '하노이 구시가지', '음식과 공예가 살아있는 36개 길드 거리.', '["36개 장인 거리","길거리 음식","야시장","프랑스풍 발코니"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('tran-quoc', 'vi', 'Chùa Trấn Quốc', 'Ngôi chùa cổ bên Hồ Tây với tháp sen đỏ nổi bật.', '["Hoàng hôn Hồ Tây","Cây bồ đề","Bảo tháp đỏ","Di sản Phật giáo"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('tran-quoc', 'en', 'Tran Quoc Pagoda', 'An ancient West Lake pagoda crowned by a red stupa.', '["West Lake sunset", "Bodhi tree", "Red stupa", "Buddhist heritage"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('tran-quoc', 'fr', 'Pagode Tran Quoc', 'Une ancienne pagode du lac de l’Ouest et son stupa rouge.', '["Coucher de soleil sur le lac de l''Ouest","Arbre de la Bodhi","Stupa rouge","Patrimoine bouddhique"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('tran-quoc', 'zh-CN', '镇国寺', '西湖畔的古寺与红色佛塔。', '["西湖日落","菩提树","红色宝塔","佛教遗产"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('tran-quoc', 'ja', '鎮国寺', '西湖畔の古寺と赤い仏塔。', '["西湖の夕日","菩提樹","赤い仏塔","仏教遺産"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('tran-quoc', 'ko', '쩐꾸옥 사원', '서호의 고찰과 붉은 사리탑.', '["서호의 일몰","보리수","붉은 불탑","불교 유산"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('opera', 'vi', 'Nhà Hát Lớn Hà Nội', 'Kiệt tác kiến trúc Tân cổ điển Pháp giữa trung tâm Hà Nội.', '["Mặt tiền tráng lệ","Khán phòng chuẩn âm học","Khu phố Pháp","Biểu diễn buổi tối"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('opera', 'en', 'Hanoi Opera House', 'A French neoclassical masterpiece in central Hanoi.', '["Grand facade", "Acoustic hall", "French quarter", "Evening performances"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('opera', 'fr', 'Opéra de Hanoï', 'Un chef-d’œuvre néoclassique français au cœur de Hanoï.', '["Façade majestueuse","Salle acoustique","Quartier français","Spectacles en soirée"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('opera', 'zh-CN', '河内大剧院', '河内市中心的法式新古典主义杰作。', '["宏伟立面","声学音乐厅","法国区","晚间演出"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('opera', 'ja', 'ハノイ歌劇場', 'ハノイ中心部のフレンチ・ネオクラシカル建築。', '["壮麗なファサード","音響ホール","フレンチクォーター","夜の公演"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('opera', 'ko', '하노이 오페라 하우스', '하노이 중심의 프랑스 신고전주의 걸작.', '["웅장한 파사드","음향 홀","프랑스 지구","저녁 공연"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('cathedral', 'vi', 'Nhà Thờ Lớn Hà Nội', 'Nhà thờ Gothic cổ kính và điểm hẹn cà phê, phố đi bộ.', '["Mặt tiền Gothic","Phố Nhà Chung","Trà chanh","Cửa ngõ Phố Cổ"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('cathedral', 'en', 'St. Joseph’s Cathedral', 'A Gothic landmark beside lively cafés and walking streets.', '["Gothic facade", "Nha Chung street", "Lemon tea", "Old Quarter gateway"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('cathedral', 'fr', 'Cathédrale Saint-Joseph', 'Un monument gothique entouré de cafés animés.', '["Façade gothique","Rue Nha Chung","Thé au citron","Porte du Vieux Quartier"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('cathedral', 'zh-CN', '圣若瑟主教座堂', '咖啡馆与步行街旁的哥特式地标。', '["哥特式立面","教堂街","柠檬茶","古街区门户"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('cathedral', 'ja', '聖ヨセフ大聖堂', 'カフェと歩行者通りに囲まれたゴシック建築。', '["ゴシック様式のファサード","ニャーチュン通り","レモンティー","旧市街への玄関口"]');
INSERT INTO public.poi_ngon_ngu (poi_id, ngon_ngu_ma, ten, mo_ta, diem_noi_bat) VALUES ('cathedral', 'ko', '성 요셉 성당', '카페와 보행자 거리의 고딕 랜드마크.', '["고딕 양식 파사드","냐쭝 거리","레몬차","구시가지 관문"]');


--
-- Data for Name: su_kien_thong_ke; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (1, 'audio_started', 'hoan-kiem', 'en', 'direct', 'd52990f8-4dbb-42e5-99ef-e32e52a3349c', '2026-10-25 01:00:27.198+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (2, 'audio_started', 'hoan-kiem', 'vi', 'direct', 'd52990f8-4dbb-42e5-99ef-e32e52a3349c', '2026-10-25 01:00:34.188+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (3, 'audio_started', 'literature', 'vi', 'direct', 'd52990f8-4dbb-42e5-99ef-e32e52a3349c', '2026-10-25 01:02:03.435+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (4, 'audio_started', 'literature', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:17.512+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (5, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:20.511+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (6, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:29.382+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (7, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:31.257+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (8, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:32.551+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (9, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:33.765+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (10, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:34.754+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (11, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f6e39cef-6e13-450a-8bbc-06fa793abfc6', '2026-10-25 11:53:35.614+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (12, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f5ee6026-957b-4aa6-aedb-fa1e1952fb8e', '2026-10-25 11:54:48.012+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (13, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f5ee6026-957b-4aa6-aedb-fa1e1952fb8e', '2026-10-25 11:54:49.188+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (14, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f5ee6026-957b-4aa6-aedb-fa1e1952fb8e', '2026-10-25 11:54:50.135+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (15, 'audio_started', 'hoan-kiem', 'en', 'direct', 'f5ee6026-957b-4aa6-aedb-fa1e1952fb8e', '2026-10-25 11:54:50.977+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (16, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:07:50.505+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (17, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:07:52.453+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (18, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:07:53.833+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (19, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:07:54.728+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (20, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:07:55.641+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (21, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:09:43.08+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (22, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:09:44.802+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (23, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:09:51.147+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (24, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:09:52.155+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (25, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:09:53.123+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (26, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:09:54.114+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (27, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:10:13.469+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (28, 'audio_started', 'hoan-kiem', 'en', 'direct', '53501440-00b3-4c14-baa6-7b7cdf1930ee', '2026-10-25 12:10:14.881+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (29, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:11:04.125+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (30, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:11:05.849+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (31, 'audio_started', 'hoan-kiem', 'vi', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:12:40.343+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (32, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:12:41.547+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (33, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:12:42.854+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (34, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:12:44.014+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (35, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:12:45.142+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (36, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:12:46.042+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (37, 'audio_started', 'pagoda', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:13:34.25+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (38, 'audio_started', 'pagoda', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:13:36.439+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (39, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:33.635+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (40, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:34.87+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (41, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:36.018+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (42, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:37.087+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (43, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:38.175+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (44, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:39.82+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (45, 'audio_started', 'hoan-kiem', 'en', 'direct', '127c7b63-d397-4120-a9d3-3837375627a3', '2026-10-25 12:14:41.404+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (46, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:23.367+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (47, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:24.661+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (48, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:25.838+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (49, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:44.654+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (50, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:49.607+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (51, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:51.178+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (52, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:52.575+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (53, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:54.105+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (54, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:55.532+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (55, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:56.763+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (56, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:58.032+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (57, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:19:59.287+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (58, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:20:00.666+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (59, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:20:01.729+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (60, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:48.482+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (61, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:53.393+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (62, 'audio_started', 'hoan-kiem', 'vi', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:56.023+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (63, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:57.161+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (64, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:58.084+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (65, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:59.08+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (66, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:24:59.94+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (67, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:25:00.649+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (68, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:26:06.483+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (69, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:26:07.605+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (70, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:26:09.221+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (71, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:26:12.852+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (72, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:26:32.539+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (73, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:29:29.616+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (74, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:29:30.78+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (75, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:29:31.708+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (76, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:29:37.166+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (77, 'audio_started', 'citadel', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:29:40.257+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (78, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:43:18.158+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (79, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:43:19.423+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (80, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:43:20.587+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (81, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:43:21.897+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (82, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:43:36.594+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (83, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:43:46.303+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (84, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:44:13.915+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (85, 'audio_started', 'hoan-kiem', 'en', 'direct', '9a11ac9d-8b00-41ac-bc19-8549e65f3c8b', '2026-10-25 12:44:15.273+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (86, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:21:48.711+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (87, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:21:50.033+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (88, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:21:51.605+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (89, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:23:19.366+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (90, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:23:20.579+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (91, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:23:21.583+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (92, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:45:27.241+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (93, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:45:28.331+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (94, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:56:11.304+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (95, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 13:56:12.404+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (96, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:17:59.985+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (97, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:18:35.819+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (98, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:18:37.033+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (99, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:18:38.075+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (100, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:18:38.812+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (101, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:18:39.716+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (102, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:18:40.918+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (103, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:19:58.519+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (104, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:30:50.668+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (105, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:30:52.438+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (106, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:30:53.927+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (107, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:30:55.293+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (108, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:30:58.301+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (109, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:00.978+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (110, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:02.2+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (111, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:03.1+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (112, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:03.826+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (113, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:04.6+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (114, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:05.267+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (115, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:05.914+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (116, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:06.53+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (117, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:07.128+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (118, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:31:07.805+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (119, 'audio_started', 'hoan-kiem', 'vi', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:32:14.649+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (120, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:51:28.9+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (121, 'audio_started', 'hoan-kiem', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:51:30.918+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (122, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:21.193+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (123, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:22.133+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (124, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:22.986+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (125, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:23.851+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (126, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:24.75+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (127, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:25.748+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (128, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:26.975+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (129, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 14:56:29.076+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (130, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:34.019+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (131, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:35.133+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (132, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:36.48+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (133, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:37.672+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (134, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:39.676+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (135, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:40.944+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (136, 'audio_started', 'literature', 'en', 'direct', 'c4a5298c-8abd-44a2-9d92-262c8a350211', '2026-10-25 15:01:42.075+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (137, 'audio_started', 'hoan-kiem', 'fr', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:19:15.544+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (138, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:19:17.025+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (139, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:19:18.452+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (140, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:19:23.121+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (141, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:28:25.332+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (142, 'audio_started', 'hoan-kiem', 'vi', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:28:51.949+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (143, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:28:53.356+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (144, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:28:56.303+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (145, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:28:57.294+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (146, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:30:24.045+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (147, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:30:25.158+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (148, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:31:51.218+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (149, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:31:52.429+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (150, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:31:54.343+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (151, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:31:55.273+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (152, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:32:47.39+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (153, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:32:49.451+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (154, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:36:04.251+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (155, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:37:25.429+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (156, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:37:27.116+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (157, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:37:28.99+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (158, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:37:38.497+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (159, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:37:39.742+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (160, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:37:40.972+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (161, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:38:01.838+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (162, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:38:02.826+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (163, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:38:16.538+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (164, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:42:55.452+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (165, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:45:14.527+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (166, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:46:35.963+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (167, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:46:38.677+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (168, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:46:44.749+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (169, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:46:46.42+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (170, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:46:47.683+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (171, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:16.765+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (172, 'audio_started', 'citadel', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:22.876+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (173, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:25.25+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (174, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:25.921+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (175, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:26.559+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (176, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:27.329+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (177, 'audio_started', 'hoan-kiem', 'en', 'direct', 'a4f82ad2-db20-4480-829a-05d27faf17df', '2026-10-25 15:47:28.158+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (178, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:48:47.501+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (179, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:48:51.43+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (180, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:48:52.394+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (181, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:49:35.58+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (182, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:50:49.68+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (183, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:50:51.177+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (184, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:50:53.276+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (185, 'audio_started', 'hoan-kiem', 'en', 'direct', '746f7075-bb4e-4c4b-b023-6b62b2402c69', '2026-10-25 15:50:54.827+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (186, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:15.289+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (187, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:17.087+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (188, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:17.952+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (189, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:18.688+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (190, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:19.154+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (191, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:19.622+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (192, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:20.076+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (193, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:20.539+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (194, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:20.981+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (195, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:21.447+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (196, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:21.859+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (197, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 15:53:22.629+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (198, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:02:28.27+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (199, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:05:26.288+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (200, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:05:27.486+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (201, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:05:28.472+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (202, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:05:32.668+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (203, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:05:33.883+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (204, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:08:16.841+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (205, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:08:18.249+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (206, 'audio_started', 'hoan-kiem', 'en', 'direct', '3a41b399-9b85-4568-a7a2-538884ce6e3c', '2026-10-25 16:08:21.859+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (207, 'audio_started', 'literature', 'en', 'direct', '6ad7b206-e530-4c76-9a12-c10e61b99fb1', '2026-10-25 16:09:45.774+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (208, 'audio_completed', NULL, 'en', 'direct', 'full-audio-test', '2026-10-25 16:21:56.152+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (209, 'qr_opened', 'hoan-kiem', 'en', 'qr', 'session-1792920656098-sq3nzwjthx', '2026-10-25 16:30:56.836+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (210, 'qr_opened', 'literature', 'vi', 'qr', 'session-1792926343664-4hhx3gm8max', '2026-10-25 18:05:44.335+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (211, 'audio_completed', 'literature', 'vi', 'direct', 'session-1792926343664-4hhx3gm8max', '2026-10-25 18:19:33.265+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (212, 'qr_opened', 'literature', 'vi', 'qr', 'session-1792930872884-eclxacgeere', '2026-10-25 19:21:13.492+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (213, 'qr_opened', 'literature', 'vi', 'qr', 'session-1792931602181-yyfkqedrssi', '2026-10-25 19:33:22.795+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (214, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792931625113-soeqxqfa54k', '2026-10-25 19:33:45.716+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (215, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792931739760-ohxyzouoj77', '2026-10-25 19:35:40.372+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (216, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792931774729-drfjue9uri', '2026-10-25 19:36:15.324+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (217, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792932118460-pz0y2fixaxd', '2026-10-25 19:41:59.053+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (218, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792932514520-sxjlaocf07', '2026-10-25 19:48:35.121+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (219, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792932553196-9a95l2twnma', '2026-10-25 19:49:13.796+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (220, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792935516855-nihqza9j45t', '2026-10-25 20:38:37.308+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (221, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792935553835-wihgfkkd06', '2026-10-25 20:39:14.415+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (222, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792947757035-f33kmdasork', '2026-10-26 00:02:37.535+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (223, 'audio_completed', 'hoan-kiem', 'fr', 'direct', '083a91f9-c686-4b2e-875f-e08312b403de', '2026-10-26 01:17:54.044+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (224, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792980094738-b1e5p36fveo', '2026-10-26 09:01:35.852+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (225, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792981919302-4lfu7ila2dw', '2026-10-26 09:32:00.379+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (226, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792983530561-83yce2g84jx', '2026-10-26 09:58:51.624+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (227, 'qr_opened', 'hoan-kiem', 'vi', 'qr', 'session-1792983595701-l4fb8en5ju', '2026-10-26 09:59:56.761+07');
INSERT INTO public.su_kien_thong_ke (id, loai_su_kien, poi_id, ngon_ngu, nguon, ma_phien, thoi_diem_tao) VALUES (228, 'qr_opened', 'literature', 'vi', 'qr', 'session-1792984245558-p5l8rimtydi', '2026-10-26 10:10:46.616+07');


--
-- Name: su_kien_thong_ke_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.su_kien_thong_ke_id_seq', 228, true);


--
-- PostgreSQL database dump complete
--

\unrestrict luBk4VJlicb9oQtCG3HBuHvrx0S9m1Pcl5LbG0glSGLpzq57elL5hJlWZgejn5q

