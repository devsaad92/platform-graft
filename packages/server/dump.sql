
COPY public.bilans (id, nom, soduim, potassuim, chlore, uree, creatinine, calcuim, "calcuimCorrige", phosphore, magnesuim, glucose, albumine, "bilirubineT", "bilirubineD", "phosphataseAlcaline", sgot, sgpt, ggt, ldh, triglyceride, cholesterole, ammonemie, lactate, amylase, lipase, crp, date, created_at, updated_at, "medcinId", "patientId") FROM stdin;
1	\N	1	2	0.5	0.6	1	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-06 20:01:02+02	2018-06-06 20:01:19.063+02	2018-06-06 20:01:19.063+02	1	1
1	\N	2	\N	2	1	\N	2	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-05-31 19:55:18+02	2018-05-31 19:55:30.959+02	2018-06-13 08:54:05.599+02	1	1
3	\N	1	0.5	0.6	0.3	0.1	1	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-18 10:02:34.83+02	2018-06-18 10:03:00.437+02	2018-06-18 10:03:00.437+02	1	1
4	\N	0.5	0.2	0.3	1	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-18 10:32:45+02	2018-06-18 10:32:49.352+02	2018-06-18 10:33:06.387+02	1	1
5	\N	2	0.3	0.6	0.8	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-19 10:33:13+02	2018-06-18 10:33:33.131+02	2018-06-18 10:33:33.131+02	1	1
6	\N	1.5	1.2	1.3	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-18 10:33:42.615+02	2018-06-18 10:33:54.5+02	2018-06-18 10:33:54.5+02	1	1
7	\N	0.9	0.7	0.8	0.4	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-12 10:34:00+02	2018-06-18 10:34:23.351+02	2018-06-18 10:34:23.351+02	1	1
8	\N	1	2	1	2	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-13 10:34:29+02	2018-06-18 10:34:41.996+02	2018-06-18 10:34:41.996+02	1	1
9	\N	1	0.6	0.9	0.8	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-14 10:34:47+02	2018-06-18 10:35:03.547+02	2018-06-18 10:35:03.547+02	1	1
10	\N	0.1	0.2	0.3	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-04 10:35:08+02	2018-06-18 10:35:21.391+02	2018-06-18 10:35:21.391+02	1	1
11	\N	1.6	1.4	1.8	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2018-06-17 10:35:26+02	2018-06-18 10:35:42.145+02	2018-06-18 10:35:42.145+02	1	1
\.




COPY public.cliniques (id, text, date, created_at, updated_at, "medcinId", "patientId") FROM stdin;
1	hi	2018-05-29 20:46:02.188+02	2018-05-29 20:46:02.501+02	2018-05-29 20:46:02.501+02	1	1
2	alo	2018-06-01 15:26:50.023+02	2018-06-01 15:26:50.412+02	2018-06-01 15:26:50.412+02	1	1
3	ok	2018-06-01 15:33:34.071+02	2018-06-01 15:33:34.379+02	2018-06-01 15:33:34.379+02	2	1
4	oui	2018-06-01 15:34:02.671+02	2018-06-01 15:34:02.98+02	2018-06-01 15:34:02.98+02	2	1
5	ok	2018-06-01 15:35:09.895+02	2018-06-01 15:35:10.209+02	2018-06-01 15:35:10.209+02	1	1
6	bnj	2018-06-01 15:42:07.127+02	2018-06-01 15:42:07.14+02	2018-06-01 15:42:07.14+02	2	1
7	c bon	2018-06-06 19:58:50.615+02	2018-06-06 19:58:50.931+02	2018-06-06 19:58:50.931+02	1	1
8	oh!	2018-06-06 19:59:29.299+02	2018-06-06 19:59:29.615+02	2018-06-06 19:59:29.615+02	1	1
9	op	2018-06-07 18:38:49.686+02	2018-06-07 18:38:50.054+02	2018-06-07 18:38:50.054+02	1	1
10	hi	2018-06-07 18:51:56.039+02	2018-06-07 18:51:56.357+02	2018-06-07 18:51:56.357+02	3	1
11	bnj	2018-06-07 19:04:45.703+02	2018-06-07 19:04:46.02+02	2018-06-07 19:04:46.02+02	3	1
12	slm	2018-06-11 18:41:01.11+02	2018-06-11 18:41:01.423+02	2018-06-11 18:41:01.423+02	1	1
13	hi	2018-06-13 09:22:52.069+02	2018-06-13 09:22:52.383+02	2018-06-13 09:22:52.383+02	1	1
14	alo	2018-06-13 09:34:23.622+02	2018-06-13 09:34:23.936+02	2018-06-13 09:34:23.936+02	1	1
15	bnj	2018-06-13 09:35:43.001+02	2018-06-13 09:35:43.309+02	2018-06-13 09:35:43.309+02	2	1
16	cooll	2018-06-13 09:39:12.607+02	2018-06-13 09:39:12.922+02	2018-06-13 09:39:12.922+02	1	1
17	cv	2018-07-02 08:51:17.882+02	2018-07-02 08:51:18.193+02	2018-07-02 08:51:18.193+02	1	2
\.



COPY public.hematologies (id, gb, lymphocyte, monocytes, neutrophiles, eosinophiles, gr, hb, ht, plaquette, vgm, ccmh, retic, tp, tca, inr, fibrinogene, "facteurV", "antiTIII", "facteurXa", "dDimeres", date, created_at, updated_at, "medcinId", "patientId") FROM stdin;
1	1	0.1	0.2	\N	1	2	\N	4	\N	\N	\N	5	\N	\N	\N	\N	1	\N	\N	\N	2018-06-14 05:46:02+02	2018-06-13 05:46:29.251+02	2018-06-13 05:46:29.251+02	1	1
2	1	0.1	0.2	\N	1	2	\N	4	\N	\N	\N	5	\N	\N	\N	\N	1	\N	\N	\N	2018-06-14 05:46:02+02	2018-06-13 05:46:29.251+02	2018-06-13 05:46:29.251+02	1	1
3	1	0.1	0.2	\N	1	2	\N	4	\N	\N	\N	5	\N	\N	\N	\N	1	\N	\N	\N	2018-06-14 05:46:02+02	2018-06-13 05:46:29.251+02	2018-06-13 05:46:29.251+02	1	1
4	2	0.6	0.8	\N	1	2	\N	4	\N	\N	\N	3.5	\N	\N	\N	\N	1	\N	\N	\N	2018-06-14 05:46:02+02	2018-06-13 05:46:29.251+02	2018-06-13 05:46:29.251+02	1	1
\.




COPY public.information (id, "Temp", "FC", "FR", "PA", "SaO2", date, created_at, updated_at, "medcinId", "patientId") FROM stdin;
1	1	1	2	1	1	2018-06-11 18:40:20.383+02	2018-06-11 18:40:28.127+02	2018-06-11 18:40:28.127+02	1	1
2	1	0.2	0.5	0.6	3	2018-06-13 04:35:47.207+02	2018-06-13 04:35:59.306+02	2018-06-13 04:35:59.306+02	1	1
\.



COPY public.instructions (id, text, date, created_at, updated_at, "medcinId", "patientId") FROM stdin;
1	oi	2018-05-31 20:20:23.501+02	2018-05-31 20:20:23.814+02	2018-05-31 20:20:23.814+02	1	1
2	ok	2018-06-01 15:31:25.063+02	2018-06-01 15:31:25.378+02	2018-06-01 15:31:25.378+02	1	1
3	yes	2018-06-01 15:34:25.408+02	2018-06-01 15:34:25.716+02	2018-06-01 15:34:25.716+02	2	1
4	si	2018-06-01 15:34:31.063+02	2018-06-01 15:34:31.375+02	2018-06-01 15:34:31.375+02	1	1
5	oh!	2018-06-06 19:59:40.532+02	2018-06-06 19:59:40.844+02	2018-06-06 19:59:40.844+02	1	1
6	slm	2018-06-07 18:56:42.153+02	2018-06-07 18:56:42.471+02	2018-06-07 18:56:42.471+02	3	1
7	hi	2018-06-07 19:07:58.94+02	2018-06-07 19:07:59.296+02	2018-06-07 19:07:59.296+02	3	1
8	alo	2018-06-10 22:24:17.267+02	2018-06-10 22:24:17.579+02	2018-06-10 22:24:17.579+02	1	1
9	cv	2018-06-13 09:35:26.587+02	2018-06-13 09:35:26.899+02	2018-06-13 09:35:26.899+02	2	1
10	hello	2018-06-13 09:38:58.915+02	2018-06-13 09:38:59.227+02	2018-06-13 09:38:59.227+02	2	1
11	oui	2018-06-13 09:43:51.59+02	2018-06-13 09:43:51.907+02	2018-06-13 09:43:51.907+02	1	1
12	slm	2018-07-02 08:56:18.431+02	2018-07-02 08:56:18.74+02	2018-07-02 08:56:18.74+02	2	1
13	si	2018-07-02 08:57:11.212+02	2018-07-02 08:57:11.538+02	2018-07-02 08:57:11.538+02	1	1
14	ok	2018-07-02 08:57:30.672+02	2018-07-02 08:57:30.983+02	2018-07-02 08:57:30.983+02	2	1
\.


COPY public.roles (id, name, created_at, updated_at) FROM stdin;
2	Assistant	2018-05-29 20:20:02.139+02	2018-05-29 20:20:02.139+02
1	Administrateur	2018-05-29 16:20:02.139+02	2018-05-29 16:20:02.139+02
3	Subscriber	2018-05-29 20:20:02.139+02	2018-05-29 20:20:02.139+02
\.



COPY public.medcins (id, "firstName", "lastName", "dateDeNaissance", sexe, specialty, email, password, created_at, updated_at, role_id) FROM stdin;
1	Saad	Mohamed	2018-05-16 01:00:00+02	male	doctor	saad@gmail.com	$2a$12$3GKhnhWtMDknSXGuzEVuQOOc2ouEpBUbaqNuDomHFd1ko2MAQqLAO	2018-05-29 20:41:38.2+02	2018-06-06 19:55:43.56+02	1
2	bbbb	cccc	2018-06-06 00:00:00+02	female	nurse	ddd@gmail.com	$2a$12$PbTlNvv580srLsEBw.XtUeIW.SaYjObTMjrqpiSBz.FHk0iQxzxki	2018-06-01 15:32:48.137+02	2018-06-12 05:38:11.919+02	2
4	hdfgfg	sfdffg	2018-06-12 00:00:00+02	male	nurse	aaa@gamil.com	$2b$12$vlv/jASCJvOHxmS4IGz2xuvHXP3oCQJZOhUO0QNblKpeVs6J64Nzu	2018-06-12 05:39:09.496+02	2018-06-12 05:39:09.496+02	\N
5	kdfkjdgjdj	hsdggfsgfg	2018-06-11 00:00:00+02	female	nurse	jaaa@gmail.com	$2b$12$9Ns2Jvkhgra6kylWdDu7Te2gaFbtHykSgVO1rTsqI3SL6OY1c6X.e	2018-06-13 03:35:01.511+02	2018-06-13 03:35:01.511+02	\N
6	jhfghgh	tyzettr	2018-06-13 00:00:00+02	female	nurse	ggg@gamil.cim	$2b$12$r.l8QSHu0wFsOGXqZBk6lespU0hhpg0DnAj6sxEP2b7zoMbI605J2	2018-06-13 03:40:24.067+02	2018-06-13 03:40:24.067+02	\N
7	jkdfjjg	ytzettrtr	2018-06-05 00:00:00+02	male	nurse	pppp@gamil.com	$2b$12$mvPqt4sZr7EtAZSj8Yk6i.vqEdO1R.csf2POxoUIUqOZbheMv6jVy	2018-06-13 03:40:53.839+02	2018-06-13 03:40:53.839+02	\N
8	kfkjf	hgfhgf	2018-06-12 00:00:00+02	male	nurse	llll@gmail.com	$2b$12$Z5WPZgjSh.zCeSAUY9RPEep2ji//iHmBNW0EMTWSp2ms.SQGV.3u6	2018-06-13 03:41:19.301+02	2018-06-13 03:41:19.301+02	\N
9	uuuu	rrrr	2018-06-14 00:00:00+02	male	nurse	yyyy@gamil.com	$2b$12$SS7p.abxYvu4xasq11frqub6Ng7YMHLl2Rr64msYNz801PjJ8lsme	2018-06-13 03:42:51.257+02	2018-06-13 03:42:51.257+02	\N
3	ahmed	Salem	2018-06-07 00:00:00+02	male	doctor	ahmed@gmail.com	$2a$12$UzMpp0Wzo6yJbATAQpvw3uVQhxKZeHNBm0JLkqrfj7tEUWPz5J5hm	2018-06-07 18:45:29.185+02	2018-06-13 08:01:13.841+02	3
\.





COPY public.members (admin, "isAuthorize", created_at, updated_at, medcin_id, patient_id) FROM stdin;
t	f	2018-06-12 01:28:49.819+02	2018-06-12 01:28:49.819+02	1	3
t	f	2018-06-12 01:48:41.315+02	2018-06-12 01:48:41.315+02	1	4
t	f	2018-06-12 01:55:32.647+02	2018-06-12 01:55:32.647+02	3	5
t	f	2018-05-31 20:20:23.501+02	2018-06-13 12:31:44.183+02	1	1
f	f	2018-06-10 21:38:06.325+02	2018-06-13 12:31:56.261+02	2	1
f	f	2018-06-13 12:31:03.257+02	2018-06-13 13:08:06.623+02	3	1
\.



COPY public.patients (id, "firstName", "lastName", "dateDeNaissance", sexe, "dateDeGreffe", created_at, updated_at) FROM stdin;
1	Ahmed	Salem	2018-05-01 01:00:00+02	male	2018-05-24 01:00:00+02	2018-05-29 20:43:10.349+02	2018-06-06 19:50:13.877+02
2	hdggf	shgfggfd	2018-06-12 00:00:00+02	male	\N	2018-06-12 01:18:50.763+02	2018-06-12 01:18:50.763+02
3	Amadou	Cheikh	2018-06-13 00:00:00+02	male	2018-06-04 00:00:00+02	2018-06-12 01:28:49.732+02	2018-06-12 01:28:49.732+02
4	Tava	Lem	2018-06-05 00:00:00+02	male	\N	2018-06-12 01:48:41.214+02	2018-06-12 01:48:41.214+02
5	Abdo	Salem	2018-06-10 00:00:00+02	male	2018-06-14 00:00:00+02	2018-06-12 01:55:32.568+02	2018-06-12 01:55:32.568+02
\.



COPY public.traitements (id, text, date, created_at, updated_at, "medcinId", "patientId") FROM stdin;
1	il est malade	2018-06-08 01:34:26+02	2018-06-07 01:34:49.247+02	2018-06-13 08:49:08.957+02	1	1
2	alo ouii	2018-06-13 08:50:05+02	2018-06-13 08:50:11.302+02	2018-06-13 09:46:47.285+02	1	1
\.



-- Completed on 2018-07-10 17:27:12

--
-- PostgreSQL database dump complete
--

