-- Active: 1704704362175@@127.0.0.1@3306@DBBabyplace

create table IF NOT EXISTS user (
    id int primary key auto_increment not null, email varchar(255) not null, password varchar(255) not null, is_admin bool, unique (email)
);

CREATE TABLE IF NOT EXISTS structure (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(255), tel VARCHAR(10), adress VARCHAR(255), zip VARCHAR(6), city VARCHAR(255), avatarPath VARCHAR(255), structureDesc VARCHAR(500), psci INT DEFAULT 0, nesting BOOLEAN DEFAULT 0, montessori BOOLEAN DEFAULT 0, handicap BOOLEAN DEFAULT 0, jardin BOOLEAN DEFAULT 0, sorties BOOLEAN DEFAULT 0, promenades BOOLEAN DEFAULT 0, eveil BOOLEAN DEFAULT 0, musique BOOLEAN DEFAULT 0, art BOOLEAN DEFAULT 0, bilingue BOOLEAN DEFAULT 0, bibli BOOLEAN DEFAULT 0, transport BOOLEAN DEFAULT 0, maxPlaces INT DEFAULT 1, maxHandicap INT DEFAULT 0, maxUnder18Months INT DEFAULT 0, maxAtypicalHours INT DEFAULT 0, maxNightCare INT DEFAULT 0, isAdaptationRequired BOOLEAN DEFAULT 0, isRespectRequired BOOLEAN DEFAULT 0, isDoorRespectRequired BOOLEAN DEFAULT 0, isInfoTransmissionRequired BOOLEAN DEFAULT 0, isCleanArrivalRequired BOOLEAN DEFAULT 0, isJewelryRemovalRequired BOOLEAN DEFAULT 0, isMedicationAdminRequired BOOLEAN DEFAULT 0, isHandicapEnabled BOOLEAN DEFAULT 0, isUnder18MonthsEnabled BOOLEAN DEFAULT 0, isAtypicalHoursEnabled BOOLEAN DEFAULT 0, isNightCareEnabled BOOLEAN DEFAULT 0, FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE IF NOT EXISTS parent (
    id int primary key auto_increment not null, user_id INT NOT NULL, avatarPath VARCHAR(255), parentName VARCHAR(255), parentFName VARCHAR(255), profession VARCHAR(255), address VARCHAR(255), ville VARCHAR(255), telephone VARCHAR(10), FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE IF NOT EXISTS hours (
    id int primary key auto_increment not null, structure_id INT NOT NULL, monday BOOLEAN DEFAULT 0, tuesday BOOLEAN DEFAULT 0, wednesday BOOLEAN DEFAULT 0, thursday BOOLEAN DEFAULT 0, friday BOOLEAN DEFAULT 0, saturday BOOLEAN DEFAULT 0, openHour TIME, closeHour TIME, FOREIGN KEY (structure_id) REFERENCES structure (id)
);

CREATE TABLE IF NOT EXISTS employee (
    id int primary key auto_increment not null, structure_id INT NOT NULL, files VARCHAR(255), name VARCHAR(255), fName VARCHAR(255), mail VARCHAR(255), fonction VARCHAR(255), FOREIGN KEY (structure_id) REFERENCES structure (id)
);

CREATE TABLE IF NOT EXISTS child (
    id int primary key auto_increment not null, parent_id INT NOT NULL, childFName VARCHAR(255) NOT NULL, childName VARCHAR(255) NULL, birthday VARCHAR(255) NOT NULL, isWalking BOOLEAN DEFAULT 0, childDoctor VARCHAR(255) NOT NULL, allergies BOOLEAN DEFAULT 0, FOREIGN KEY (parent_id) REFERENCES parent (id)
);

CREATE TABLE IF NOT EXISTS reservation (
    id int primary key auto_increment not null, structure_id INT NOT NULL, parent_id INT NOT NULL, child_id INT NOT NULL, childName VARCHAR(255) NOT NULL, childFName VARCHAR(255) NOT NULL, dayResa VARCHAR(10) NOT NULL, startHour TIME NOT NULL, finishHour TIME NOT NULL, status BOOLEAN DEFAULT 0, message VARCHAR(300) NULL, FOREIGN KEY (structure_id) REFERENCES structure (id), FOREIGN KEY (parent_id) REFERENCES parent (id)
);