SELECT * FROM artistit, festivaalit, kaupungit;

-- @BLOCK
SELECT * FROM artistit;

-- @BLOCK
SELECT * FROM festivaalit;

-- @BLOCK
SELECT * FROM kaupungit;

-- @BLOCK
SELECT A.nimi, K.nimi FROM artistit A, kaupungit K, sijainti S, keikat WHERE K.id = S.kaupungit_id AND A.id = keikat.artistit_id AND A.nimi = 'Iron Maiden';

-- @BLOCK
SELECT F.nimi, K.nimi FROM kaupungit K, festivaalit F, sijainti S WHERE K.id = S.kaupungit_id AND F.id = S.festivaalit_id AND F.nimi = 'Rockfest';

-- @BLOCK
SELECT F.nimi, A.nimi FROM festivaalit F, artistit A, keikat K WHERE F.id = K.festivaalit_id AND A.id = K.artistit_id AND A.nimi = 'Iron Maiden';

-- @BLOCK
SELECT MAX(F.nimi) FROM festivaalit F, keikat K, artistit A WHERE F.id = K.festivaalit_id AND A.id = K.artistit_id;

-- @BLOCK
SELECT nimi, paivamaara FROM festivaalit F ORDER BY paivamaara;

-- @BLOCK
SELECT A.nimi FROM artistit A, keikat K WHERE A.id = K.artistit_id;
-- @BLOCK
INSERT INTO keikat (artistit_id, festivaalit_id, kaupungit_id) VALUES
    -- Rockfest
    (1, 1, 1),
    (2, 1, 1),
    (3, 1, 1),
    (4, 1, 1),
    (5, 1, 1),
    (6, 1, 1),
    (7, 1, 1),
    (8, 1, 1),
    (9, 1, 1),
    (10, 1, 1),
    -- Nummirock
    (11, 2, 2),
    (12, 2, 2),
    (13, 2, 2),
    (14, 2, 2),
    (15, 2, 2),
    (16, 2, 2),
    (17, 2, 2),
    (18, 2, 2),
    (19, 2, 2),
    (20, 2, 2),
    -- Ruisrock
    (21, 3, 3),
    (22, 3, 3),
    (23, 3, 3),
    (24, 3, 3),
    (25, 3, 3),
    (26, 3, 3),
    (27, 3, 3),
    (28, 3, 3),
    (29, 3, 3),
    (30, 3, 3),
    -- Ilosaarirock
    (31, 4, 4),
    (32, 4, 4),
    (33, 4, 4),
    (34, 4, 4),
    (35, 4, 4),
    (36, 4, 4),
    (37, 4, 4),
    (38, 4, 4),
    (39, 4, 4),
    (28, 4, 4),
    -- Kuopiorockg
    (40, 4, 4),
    (41, 5, 5),
    (42, 5, 5),
    (43, 5, 5),
    (44, 5, 5),
    (45, 5, 5),
    (46, 5, 5),
    (47, 5, 5),
    (48, 5, 5),
    (28, 5, 5)
;