--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2023-03-22 23:13:00

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
-- TOC entry 3366 (class 1262 OID 26490)
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
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 26491)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

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
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.log_kendaraan OWNER TO postgres;

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
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 214
-- Name: seq_civitas_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_civitas_id OWNED BY public.civitas.id;


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
-- TOC entry 3369 (class 0 OID 0)
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
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 210
-- Name: seq_user_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seq_user_id OWNED BY public."User".id;


--
-- TOC entry 3184 (class 2604 OID 26499)
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public.seq_user_id'::regclass);


--
-- TOC entry 3190 (class 2604 OID 26523)
-- Name: civitas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.civitas ALTER COLUMN id SET DEFAULT nextval('public.seq_civitas_id'::regclass);


--
-- TOC entry 3187 (class 2604 OID 26509)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.seq_role_id'::regclass);


--
-- TOC entry 3351 (class 0 OID 26491)
-- Dependencies: 209
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" VALUES (1, 'akademik', '123', 1001, '2023-03-22 23:02:07.570046', '2023-03-22 23:02:07.570046');
INSERT INTO public."User" VALUES (2, 'parkir', '123', 1002, '2023-03-22 23:02:07.584275', '2023-03-22 23:02:07.584275');


--
-- TOC entry 3355 (class 0 OID 26515)
-- Dependencies: 213
-- Data for Name: civitas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.civitas VALUES (1000, '20/460539/TK/51128', 'Jovian', 'Mahasiswa', '2023-03-22 23:02:37.046261', '2023-03-22 23:02:37.046261');


--
-- TOC entry 3359 (class 0 OID 26532)
-- Dependencies: 217
-- Data for Name: kendaraan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.kendaraan VALUES (2, 'Motor', 'AB1234JR', 1000, '2023-03-22 23:03:26.883466', '2023-03-22 23:03:26.883466');
INSERT INTO public.kendaraan VALUES (3, 'Motor', 'AB5555JR', 1000, '2023-03-22 23:03:26.89565', '2023-03-22 23:03:26.89565');


--
-- TOC entry 3357 (class 0 OID 26524)
-- Dependencies: 215
-- Data for Name: log_kendaraan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.log_kendaraan VALUES (1, '2023-03-22 23:04:08.93585', '2023-03-22 23:04:16.891578', 'AB1234JR', 2, '2023-03-22 23:04:08.93585', '2023-03-22 23:04:08.93585');


--
-- TOC entry 3353 (class 0 OID 26503)
-- Dependencies: 211
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.role VALUES (1001, 'akademik', '2023-03-22 23:01:21.84292', '2023-03-22 23:01:21.84292');
INSERT INTO public.role VALUES (1002, 'parkir', '2023-03-22 23:01:21.847271', '2023-03-22 23:01:21.847271');


--
-- TOC entry 3371 (class 0 OID 0)
-- Dependencies: 214
-- Name: seq_civitas_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_civitas_id', 1000, true);


--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 218
-- Name: seq_kendaraan_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_kendaraan_id', 3, true);


--
-- TOC entry 3373 (class 0 OID 0)
-- Dependencies: 216
-- Name: seq_log_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_log_id', 1, true);


--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 212
-- Name: seq_role_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_role_id', 1002, true);


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 210
-- Name: seq_user_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_user_id', 2, true);


--
-- TOC entry 3200 (class 2606 OID 26497)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 3204 (class 2606 OID 26521)
-- Name: civitas civitas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.civitas
    ADD CONSTRAINT civitas_pkey PRIMARY KEY (id);


--
-- TOC entry 3208 (class 2606 OID 26548)
-- Name: kendaraan kendaraan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kendaraan
    ADD CONSTRAINT kendaraan_pkey PRIMARY KEY (id);


--
-- TOC entry 3206 (class 2606 OID 26550)
-- Name: log_kendaraan log_kendaraan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT log_kendaraan_pkey PRIMARY KEY (id);


--
-- TOC entry 3202 (class 2606 OID 26507)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 26539)
-- Name: kendaraan civitas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kendaraan
    ADD CONSTRAINT civitas FOREIGN KEY (civitas_id) REFERENCES public.civitas(id);


--
-- TOC entry 3210 (class 2606 OID 26551)
-- Name: log_kendaraan kendaraan; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT kendaraan FOREIGN KEY (kendaraan_id) REFERENCES public.kendaraan(id) NOT VALID;


--
-- TOC entry 3209 (class 2606 OID 26510)
-- Name: User role; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT role FOREIGN KEY (role_id) REFERENCES public.role(id) NOT VALID;


-- Completed on 2023-03-22 23:13:01

--
-- PostgreSQL database dump complete
--

