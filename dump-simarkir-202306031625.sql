--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2023-06-03 16:25:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE simarkir;
--
-- TOC entry 3378 (class 1262 OID 26490)
-- Name: simarkir; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE simarkir WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';


ALTER DATABASE simarkir OWNER TO postgres;

\connect simarkir

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3379 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 26491)
-- Name: account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.account OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 26515)
-- Name: civitas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.civitas (
    id integer NOT NULL,
    nomor_identitas character varying NOT NULL,
    nama character varying NOT NULL,
    kategori_civitas character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.civitas OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 26544)
-- Name: seq_kendaraan_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_kendaraan_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_kendaraan_id OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 26532)
-- Name: kendaraan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kendaraan (
    id integer DEFAULT nextval('public.seq_kendaraan_id'::regclass) NOT NULL,
    jenis_kendaraan character varying NOT NULL,
    nomor_kendaraan character varying NOT NULL,
    civitas_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.kendaraan OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 26531)
-- Name: seq_log_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_log_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_log_id OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 26524)
-- Name: log_kendaraan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.log_kendaraan (
    id integer DEFAULT nextval('public.seq_log_id'::regclass) NOT NULL,
    waktu_masuk timestamp without time zone,
    waktu_keluar timestamp without time zone,
    nomor_kendaraan_raw character varying NOT NULL,
    kendaraan_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    parkiran_id integer DEFAULT 100 NOT NULL
);


ALTER TABLE public.log_kendaraan OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 26569)
-- Name: parkir; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parkir (
    id integer NOT NULL,
    nama character varying(255),
    kapasitas integer
);


ALTER TABLE public.parkir OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 26503)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 26522)
-- Name: seq_civitas_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_civitas_id
    START WITH 1000
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_civitas_id OWNER TO postgres;

--
-- TOC entry 3380 (class 0 OID 0)
-- Dependencies: 214
-- Name: seq_civitas_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_civitas_id OWNED BY public.civitas.id;


--
-- TOC entry 220 (class 1259 OID 26574)
-- Name: seq_parkir_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_parkir_id
    START WITH 100
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_parkir_id OWNER TO postgres;

--
-- TOC entry 3381 (class 0 OID 0)
-- Dependencies: 220
-- Name: seq_parkir_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_parkir_id OWNED BY public.parkir.id;


--
-- TOC entry 212 (class 1259 OID 26508)
-- Name: seq_role_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_role_id
    START WITH 1000
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_role_id OWNER TO postgres;

--
-- TOC entry 3382 (class 0 OID 0)
-- Dependencies: 212
-- Name: seq_role_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_role_id OWNED BY public.role.id;


--
-- TOC entry 210 (class 1259 OID 26498)
-- Name: seq_user_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_user_id OWNER TO postgres;

--
-- TOC entry 3383 (class 0 OID 0)
-- Dependencies: 210
-- Name: seq_user_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_user_id OWNED BY public.account.id;


--
-- TOC entry 3189 (class 2604 OID 26499)
-- Name: account id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account ALTER COLUMN id SET DEFAULT nextval('public.seq_user_id'::regclass);


--
-- TOC entry 3195 (class 2604 OID 26523)
-- Name: civitas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.civitas ALTER COLUMN id SET DEFAULT nextval('public.seq_civitas_id'::regclass);


--
-- TOC entry 3205 (class 2604 OID 26575)
-- Name: parkir id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parkir ALTER COLUMN id SET DEFAULT nextval('public.seq_parkir_id'::regclass);


--
-- TOC entry 3192 (class 2604 OID 26509)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.seq_role_id'::regclass);


--
-- TOC entry 3361 (class 0 OID 26491)
-- Dependencies: 209
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.account VALUES (1, 'akademik', '$2a$10$1GbsLXBjf4AgF10NyI2C1Ofc5lQjWU2Jd8WQmgUhphpl3FcvTkyfy', 1001, '2023-03-22 23:02:07.570046', '2023-03-22 23:02:07.570046');
INSERT INTO public.account VALUES (2, 'parkir', '$2a$10$1GbsLXBjf4AgF10NyI2C1Ofc5lQjWU2Jd8WQmgUhphpl3FcvTkyfy', 1002, '2023-03-22 23:02:07.584275', '2023-03-22 23:02:07.584275');


--
-- TOC entry 3365 (class 0 OID 26515)
-- Dependencies: 213
-- Data for Name: civitas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.civitas VALUES (1000, '20/460539/TK/51128', 'Jovian', 'Mahasiswa', '2023-03-22 23:02:37.046261', '2023-03-22 23:02:37.046261');
INSERT INTO public.civitas VALUES (1001, '20/460511/XY/41571', 'John Doe', 'Dosen', '2023-06-03 15:02:51.687714', '2023-06-03 15:02:51.687714');


--
-- TOC entry 3369 (class 0 OID 26532)
-- Dependencies: 217
-- Data for Name: kendaraan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.kendaraan VALUES (3, 'motor', 'AB5555JR', 1000, '2023-03-22 23:03:26.89565', '2023-03-22 23:03:26.89565');
INSERT INTO public.kendaraan VALUES (2, 'mobil', 'AB2222XD', 1000, '2023-03-22 23:03:26.883466', '2023-03-22 23:03:26.883466');
INSERT INTO public.kendaraan VALUES (4, 'motor', 'AB0909MT', 1000, '2023-03-22 23:03:26.89565', '2023-03-22 23:03:26.89565');


--
-- TOC entry 3367 (class 0 OID 26524)
-- Dependencies: 215
-- Data for Name: log_kendaraan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.log_kendaraan VALUES (4, '2023-06-03 15:08:31.264218', '2023-06-03 15:08:31.264218', 'AB1234JR', 3, '2023-03-22 23:04:08.93585', '2023-03-22 23:04:08.93585', 100);
INSERT INTO public.log_kendaraan VALUES (5, '2023-06-03 15:08:31.264218', '2023-06-03 15:08:31.264218', 'AB0909MT', 4, '2023-03-22 23:04:08.93585', '2023-03-22 23:04:08.93585', 100);
INSERT INTO public.log_kendaraan VALUES (1, '2023-06-03 15:08:31.264218', '2023-06-03 15:08:31.264218', 'AB2222XD', 2, '2023-03-22 23:04:08.93585', '2023-03-22 23:04:08.93585', 100);


--
-- TOC entry 3371 (class 0 OID 26569)
-- Dependencies: 219
-- Data for Name: parkir; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.parkir VALUES (100, 'dteti', 20);


--
-- TOC entry 3363 (class 0 OID 26503)
-- Dependencies: 211
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.role VALUES (1001, 'akademik', '2023-03-22 23:01:21.84292', '2023-03-22 23:01:21.84292');
INSERT INTO public.role VALUES (1002, 'parkir', '2023-03-22 23:01:21.847271', '2023-03-22 23:01:21.847271');


--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 214
-- Name: seq_civitas_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_civitas_id', 1001, true);


--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 218
-- Name: seq_kendaraan_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_kendaraan_id', 4, true);


--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 216
-- Name: seq_log_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_log_id', 5, true);


--
-- TOC entry 3387 (class 0 OID 0)
-- Dependencies: 220
-- Name: seq_parkir_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_parkir_id', 100, true);


--
-- TOC entry 3388 (class 0 OID 0)
-- Dependencies: 212
-- Name: seq_role_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_role_id', 1002, true);


--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 210
-- Name: seq_user_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_user_id', 2, true);


--
-- TOC entry 3207 (class 2606 OID 26497)
-- Name: account User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 26521)
-- Name: civitas civitas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.civitas
    ADD CONSTRAINT civitas_pkey PRIMARY KEY (id);


--
-- TOC entry 3215 (class 2606 OID 26548)
-- Name: kendaraan kendaraan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kendaraan
    ADD CONSTRAINT kendaraan_pkey PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 26550)
-- Name: log_kendaraan log_kendaraan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT log_kendaraan_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 26573)
-- Name: parkir parkir_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parkir
    ADD CONSTRAINT parkir_pkey PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 26507)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 26539)
-- Name: kendaraan civitas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kendaraan
    ADD CONSTRAINT civitas FOREIGN KEY (civitas_id) REFERENCES public.civitas(id);


--
-- TOC entry 3219 (class 2606 OID 26551)
-- Name: log_kendaraan kendaraan; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT kendaraan FOREIGN KEY (kendaraan_id) REFERENCES public.kendaraan(id) NOT VALID;


--
-- TOC entry 3220 (class 2606 OID 26577)
-- Name: log_kendaraan parkiran; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT parkiran FOREIGN KEY (parkiran_id) REFERENCES public.parkir(id) NOT VALID;


--
-- TOC entry 3218 (class 2606 OID 26510)
-- Name: account role; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT role FOREIGN KEY (role_id) REFERENCES public.role(id) NOT VALID;


-- Completed on 2023-06-03 16:25:21

--
-- PostgreSQL database dump complete
--

