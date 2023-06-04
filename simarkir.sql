PGDMP     !    '                {            simarkir    14.5    14.5 .    /           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            0           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            1           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            2           1262    26490    simarkir    DATABASE     h   CREATE DATABASE simarkir WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';
    DROP DATABASE simarkir;
                postgres    false            �            1259    26491    account    TABLE     /  CREATE TABLE public.account (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.account;
       public         heap    postgres    false            �            1259    26515    civitas    TABLE     E  CREATE TABLE public.civitas (
    id integer NOT NULL,
    nomor_identitas character varying NOT NULL,
    nama character varying NOT NULL,
    kategori_civitas character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.civitas;
       public         heap    postgres    false            �            1259    26544    seq_kendaraan_id    SEQUENCE     y   CREATE SEQUENCE public.seq_kendaraan_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.seq_kendaraan_id;
       public          postgres    false            �            1259    26532 	   kendaraan    TABLE     w  CREATE TABLE public.kendaraan (
    id integer DEFAULT nextval('public.seq_kendaraan_id'::regclass) NOT NULL,
    jenis_kendaraan character varying NOT NULL,
    nomor_kendaraan character varying NOT NULL,
    civitas_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.kendaraan;
       public         heap    postgres    false    218            �            1259    26531 
   seq_log_id    SEQUENCE     s   CREATE SEQUENCE public.seq_log_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.seq_log_id;
       public          postgres    false            �            1259    26524    log_kendaraan    TABLE     �  CREATE TABLE public.log_kendaraan (
    id integer DEFAULT nextval('public.seq_log_id'::regclass) NOT NULL,
    waktu_masuk timestamp without time zone,
    waktu_keluar timestamp without time zone,
    nomor_kendaraan_raw character varying NOT NULL,
    kendaraan_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    parkiran_id integer DEFAULT 100 NOT NULL
);
 !   DROP TABLE public.log_kendaraan;
       public         heap    postgres    false    216            �            1259    26569    parkir    TABLE     p   CREATE TABLE public.parkir (
    id integer NOT NULL,
    nama character varying(255),
    kapasitas integer
);
    DROP TABLE public.parkir;
       public         heap    postgres    false            �            1259    26503    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    26522    seq_civitas_id    SEQUENCE     z   CREATE SEQUENCE public.seq_civitas_id
    START WITH 1000
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.seq_civitas_id;
       public          postgres    false    213            3           0    0    seq_civitas_id    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.seq_civitas_id OWNED BY public.civitas.id;
          public          postgres    false    214            �            1259    26574    seq_parkir_id    SEQUENCE     x   CREATE SEQUENCE public.seq_parkir_id
    START WITH 100
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.seq_parkir_id;
       public          postgres    false    219            4           0    0    seq_parkir_id    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.seq_parkir_id OWNED BY public.parkir.id;
          public          postgres    false    220            �            1259    26508    seq_role_id    SEQUENCE     w   CREATE SEQUENCE public.seq_role_id
    START WITH 1000
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.seq_role_id;
       public          postgres    false    211            5           0    0    seq_role_id    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.seq_role_id OWNED BY public.role.id;
          public          postgres    false    212            �            1259    26498    seq_user_id    SEQUENCE     t   CREATE SEQUENCE public.seq_user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.seq_user_id;
       public          postgres    false    209            6           0    0    seq_user_id    SEQUENCE OWNED BY     >   ALTER SEQUENCE public.seq_user_id OWNED BY public.account.id;
          public          postgres    false    210            u           2604    26499 
   account id    DEFAULT     e   ALTER TABLE ONLY public.account ALTER COLUMN id SET DEFAULT nextval('public.seq_user_id'::regclass);
 9   ALTER TABLE public.account ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            {           2604    26523 
   civitas id    DEFAULT     h   ALTER TABLE ONLY public.civitas ALTER COLUMN id SET DEFAULT nextval('public.seq_civitas_id'::regclass);
 9   ALTER TABLE public.civitas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    26575 	   parkir id    DEFAULT     f   ALTER TABLE ONLY public.parkir ALTER COLUMN id SET DEFAULT nextval('public.seq_parkir_id'::regclass);
 8   ALTER TABLE public.parkir ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            x           2604    26509    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.seq_role_id'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            !          0    26491    account 
   TABLE DATA                 public          postgres    false    209   �1       %          0    26515    civitas 
   TABLE DATA                 public          postgres    false    213   �2       )          0    26532 	   kendaraan 
   TABLE DATA                 public          postgres    false    217   �3       '          0    26524    log_kendaraan 
   TABLE DATA                 public          postgres    false    215   �4       +          0    26569    parkir 
   TABLE DATA                 public          postgres    false    219   �5       #          0    26503    role 
   TABLE DATA                 public          postgres    false    211   �5       7           0    0    seq_civitas_id    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.seq_civitas_id', 1001, true);
          public          postgres    false    214            8           0    0    seq_kendaraan_id    SEQUENCE SET     >   SELECT pg_catalog.setval('public.seq_kendaraan_id', 4, true);
          public          postgres    false    218            9           0    0 
   seq_log_id    SEQUENCE SET     8   SELECT pg_catalog.setval('public.seq_log_id', 6, true);
          public          postgres    false    216            :           0    0    seq_parkir_id    SEQUENCE SET     =   SELECT pg_catalog.setval('public.seq_parkir_id', 100, true);
          public          postgres    false    220            ;           0    0    seq_role_id    SEQUENCE SET     <   SELECT pg_catalog.setval('public.seq_role_id', 1002, true);
          public          postgres    false    212            <           0    0    seq_user_id    SEQUENCE SET     9   SELECT pg_catalog.setval('public.seq_user_id', 2, true);
          public          postgres    false    210            �           2606    26497    account User_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.account
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.account DROP CONSTRAINT "User_pkey";
       public            postgres    false    209            �           2606    26521    civitas civitas_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.civitas
    ADD CONSTRAINT civitas_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.civitas DROP CONSTRAINT civitas_pkey;
       public            postgres    false    213            �           2606    26548    kendaraan kendaraan_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.kendaraan
    ADD CONSTRAINT kendaraan_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.kendaraan DROP CONSTRAINT kendaraan_pkey;
       public            postgres    false    217            �           2606    26550     log_kendaraan log_kendaraan_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT log_kendaraan_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.log_kendaraan DROP CONSTRAINT log_kendaraan_pkey;
       public            postgres    false    215            �           2606    26573    parkir parkir_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.parkir
    ADD CONSTRAINT parkir_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.parkir DROP CONSTRAINT parkir_pkey;
       public            postgres    false    219            �           2606    26507    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    211            �           2606    26539    kendaraan civitas    FK CONSTRAINT     u   ALTER TABLE ONLY public.kendaraan
    ADD CONSTRAINT civitas FOREIGN KEY (civitas_id) REFERENCES public.civitas(id);
 ;   ALTER TABLE ONLY public.kendaraan DROP CONSTRAINT civitas;
       public          postgres    false    213    3211    217            �           2606    26551    log_kendaraan kendaraan    FK CONSTRAINT     �   ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT kendaraan FOREIGN KEY (kendaraan_id) REFERENCES public.kendaraan(id) NOT VALID;
 A   ALTER TABLE ONLY public.log_kendaraan DROP CONSTRAINT kendaraan;
       public          postgres    false    215    217    3215            �           2606    26577    log_kendaraan parkiran    FK CONSTRAINT     �   ALTER TABLE ONLY public.log_kendaraan
    ADD CONSTRAINT parkiran FOREIGN KEY (parkiran_id) REFERENCES public.parkir(id) NOT VALID;
 @   ALTER TABLE ONLY public.log_kendaraan DROP CONSTRAINT parkiran;
       public          postgres    false    219    3217    215            �           2606    26510    account role    FK CONSTRAINT     t   ALTER TABLE ONLY public.account
    ADD CONSTRAINT role FOREIGN KEY (role_id) REFERENCES public.role(id) NOT VALID;
 6   ALTER TABLE ONLY public.account DROP CONSTRAINT role;
       public          postgres    false    209    3209    211            !   �   x����n�@��<�H��� �ؓm��1+hof�]�,І�wM{��z�3�?3��x3�HH'+��C��1��.-��%]#��U�%�5�w��Lץ�� ג�R�Yk�J��!�Ζ�|C�%+��U^8&��l
6};4�ϗs�ώ
q�+]e<(��]��b�[W���N���+)��7��v�x#D��p
�8�'�o:|��G�y��.r�?�xOg�cܕ��Fֲ����      %   �   x���=O�0E��������ώ�R&�vE��=�ZP�J���q�R�nlW���r�Y=UP��G�޿\�5���a�Z>�BW���a�Ў|�`?B��ӘA���ښ�}{�Sx��^m`�B�<7B�+^�q�(�i����ȏ遶Ի���߱T3�fR�T!��Dn����:)�Q�b�������zX;�e�?7�;��k�̼(0��F�$���xd      )   �   x�ő��@�{���̺��H�QL �Y�b�+>������j23͗���"��h͐,��*�-�H,S��W���U]��c���i_�i��>�b�+04��˰sV[7�( �u_�"7�\�Z�OB<�c��F���ĴtCߖ�L�~�� 	+F̵_| 1�f/I��(��'�B�:��'�p���      '   �   x����N�@ �;O17�d!���z��b�R㍬��B��b�ň��{���|�(ٮ7)DI� ��\�{�n_��hrm�n`Q�����_��3��zІA�Z3�gFL�����/�L��.?ǝ6UiNCKx\Ż���MH�A�A	�\�{Hd3Hvq<άnh|O�c��+�!
����x�/M������� ���WNB�mƊ�@f@|2����ӕ}����t���x��������Z,Y      +   U   x���v
Q���W((M��L�+H,��,R��L�Q�K�M�Q�N,H,�,I,�Ts�	uV�040�QPO)I-�T�Q02д��� ��g      #   �   x���v
Q���W((M��L�+��IU��L�Q�K�M�QH.JM,IM�O,�Q(-H��5�}B]�4u��SRs3�Ձl##c]c]###c+C+#C=#K#����\�Tq�К�Ģ��"������� ��KJ     