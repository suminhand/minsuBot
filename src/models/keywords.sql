CREATE TABLE location (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE exclusive (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    locationId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (locationId) REFERENCES location(id)
);

CREATE TABLE category (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    selfExclusive BOOLEAN NOT NULL,
    exclusiveId INT,
    locationId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (locationId) REFERENCES location(id),
    FOREIGN KEY (exclusiveId) REFERENCES exclusive(id)
);

CREATE TABLE keyword (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    categoryId INT NOT NULL,
    locationId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (categoryId) REFERENCES category(id),
    FOREIGN KEY (locationId) REFERENCES location(id)
);

-- location
INSERT INTO location (id, name) VALUES (1, 'default');

-- exclusive
INSERT INTO exclusive (id, name, locationId) VALUES
(1, '작품', 1),
(2, '장르', 1);

-- category (exclusive 없는 것들)
INSERT INTO category (id, name, selfExclusive, exclusiveId, locationId) VALUES
(1, '계절', TRUE, NULL, 1),
(2, '풍경', True, NULL, 1),
(3, '감정', True, NULL, 1);

-- category (exclusive=작품)
INSERT INTO category (id, name, selfExclusive, exclusiveId, locationId) VALUES
(4, '원피스', FALSE, 1, 1),
(5, '나루토', FALSE, 1, 1),
(6, '리그오브레전드', FALSE, 1, 1),
(7, '지브리', FALSE, 1, 1);

-- category (exclusive=장르)
INSERT INTO category (id, name, selfExclusive, exclusiveId, locationId) VALUES
(8, '판타지', FALSE, 2, 1),
(9, '현대', FALSE, 2, 1);

-- keyword (계절 4개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('봄', 1, 1),
('여름', 1, 1),
('가을', 1, 1),
('겨울', 1, 1);

-- keyword (풍경 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('산', 2, 1),
('바다', 2, 1),
('숲', 2, 1),
('도시', 2, 1),
('사막', 2, 1),
('호수', 2, 1),
('하늘', 2, 1),
('폭포', 2, 1),
('들판', 2, 1),
('섬', 2, 1);

-- keyword (감정 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('기쁨', 3, 1),
('슬픔', 3, 1),
('분노', 3, 1),
('놀람', 3, 1),
('두려움', 3, 1),
('평온', 3, 1),
('사랑', 3, 1),
('외로움', 3, 1),
('부끄러움', 3, 1),
('자부심', 3, 1);

-- keyword (원피스 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('루피', 4, 1),
('조로', 4, 1),
('나미', 4, 1),
('우솝', 4, 1),
('상디', 4, 1),
('쵸파', 4, 1),
('로빈', 4, 1),
('프랑키', 4, 1),
('브룩', 4, 1),
('샹크스', 4, 1);

-- keyword (나루토 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('나루토', 5, 1),
('사스케', 5, 1),
('사쿠라', 5, 1),
('카카시', 5, 1),
('이타치', 5, 1),
('가아라', 5, 1),
('네지', 5, 1),
('히나타', 5, 1),
('츠나데', 5, 1),
('오로치마루', 5, 1);

-- keyword (리그오브레전드 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('야스오', 6, 1),
('아리', 6, 1),
('징크스', 6, 1),
('제드', 6, 1),
('럭스', 6, 1),
('가렌', 6, 1),
('이즈리얼', 6, 1),
('카타리나', 6, 1),
('티모', 6, 1),
('리신', 6, 1);

-- keyword (지브리 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('토토로', 7, 1),
('센과 치히로', 7, 1),
('하울', 7, 1),
('소피', 7, 1),
('키키', 7, 1),
('포뇨', 7, 1),
('아시타카', 7, 1),
('산', 7, 1),
('시타', 7, 1),
('파즈', 7, 1);

-- keyword (판타지 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('마법사', 8, 1),
('드래곤', 8, 1),
('요정', 8, 1),
('기사', 8, 1),
('마녀', 8, 1),
('성', 8, 1),
('검', 8, 1),
('주술사', 8, 1),
('괴물', 8, 1),
('엘프', 8, 1);

-- keyword (현대 10개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('직장인', 9, 1),
('학생', 9, 1),
('운동선수', 9, 1),
('아이돌', 9, 1),
('카페', 9, 1),
('지하철', 9, 1),
('스마트폰', 9, 1),
('자동차', 9, 1),
('도서관', 9, 1),
('편의점', 9, 1);

-- category (추가)
INSERT INTO category (id, name, selfExclusive, exclusiveId, locationId) VALUES
(10, '음식', FALSE, NULL, 1),
(11, '동물', FALSE, NULL, 1),
(12, '색상', FALSE, NULL, 1);

-- keyword (음식 6개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('피자', 10, 1),
('햄버거', 10, 1),
('초밥', 10, 1),
('라면', 10, 1),
('떡볶이', 10, 1),
('케이크', 10, 1);

-- keyword (동물 5개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('고양이', 11, 1),
('강아지', 11, 1),
('호랑이', 11, 1),
('독수리', 11, 1),
('돌고래', 11, 1);

-- keyword (색상 5개)
INSERT INTO keyword (name, categoryId, locationId) VALUES
('빨강', 12, 1),
('파랑', 12, 1),
('초록', 12, 1),
('노랑', 12, 1),
('보라', 12, 1);