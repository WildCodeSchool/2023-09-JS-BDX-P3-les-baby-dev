DROP DATABASE if EXISTS DBBabyplace;

create DATABASE if not exists DBBabyplace;

use DBBabyplace;

DROP TABLE if EXISTS user;

create table
    IF NOT EXISTS user (
        id int unsigned primary key auto_increment not null,
        email varchar(255) not null,
        password varchar(255) not null,
        is_admin bool,
        unique(email)
    );

insert into
    user (email, password, is_admin)
values ('user@demo.com', '1234', 0), ('admin@demo.com', '1234', 1);

DROP TABLE if EXISTS structure;

CREATE TABLE
    if NOT exists structure (
        id int primary key auto_increment not null,
        name VARCHAR(255) NOT NULL,
        tel VARCHAR(10) NOT NULL,
        adress VARCHAR(255) NOT NULL,
        zip VARCHAR(6) NOT NULL,
        city VARCHAR(255) NOT NULL,
        avatarPath VARCHAR(255),
        stuctureDesc VARCHAR(500),
        pcsi BOOLEAN DEFAULT 0,
        nesting BOOLEAN DEFAULT 0,
        montessori BOOLEAN DEFAULT 0,
        handicap BOOLEAN DEFAULT 0,
        jardin BOOLEAN DEFAULT 0,
        sorties BOOLEAN DEFAULT 0,
        promenades BOOLEAN DEFAULT 0,
        eveil BOOLEAN DEFAULT 0,
        musique BOOLEAN DEFAULT 0,
        art BOOLEAN DEFAULT 0,
        bilingue BOOLEAN DEFAULT 0,
        bibli BOOLEAN DEFAULT 0,
        transport BOOLEAN DEFAULT 0,
        maxplace int DEFAULT 1,
        maxHandicap int DEFAULT 0,
        maxUnder18Months int DEFAULT 0,
        maxAtypicalHours int DEFAULT 0,
        maxNightCare int DEFAULT 0,
        isAdaptationRequired BOOLEAN DEFAULT 0,
        isRespectRequired BOOLEAN DEFAULT 0,
        isDoorRespectRequired BOOLEAN DEFAULT 0,
        isInfoTransmissionRequired BOOLEAN DEFAULT 0,
        isCleanArrivalRequired BOOLEAN DEFAULT 0,
        isJewelryRemovalRequired BOOLEAN DEFAULT 0,
        isMedicationAdminRequired BOOLEAN DEFAULT 0
    );

insert into
    structure (name, tel, adress, zip, city)
values (
        'daamn',
        '0678252910',
        '17 rue gambetta',
        '33130',
        'bèglesZoo'
    );

DROP TABLE if EXISTS hours;

CREATE TABLE
    IF NOT EXISTS hours (
        id int primary key auto_increment not null,
        structure_id INT NOT NULL,
        day VARCHAR(10) NOT NULL,
        openHour TIME NOT NULL,
        closeHour TIME NOT NULL -- FOREIGN KEY (structure_id) REFERENCES structure (id)
    );

ALTER TABLE hours
ADD
    CONSTRAINT `fk_structure_id` FOREIGN KEY (structure_id) REFERENCES structure(id);

DROP TABLE if EXISTS employee;

CREATE TABLE
    IF NOT EXISTS employee (
        id int unsigned primary key auto_increment not null,
        structure_id INT NOT NULL,
        files VARCHAR(255) NULL,
        name VARCHAR(255) NOT NULL,
        fName VARCHAR(255) NOT NULL,
        mail VARCHAR(255) NOT NULL,
        fonction VARCHAR(255) NOT NULL,
        FOREIGN KEY (structure_id) REFERENCES structure(id)
    );