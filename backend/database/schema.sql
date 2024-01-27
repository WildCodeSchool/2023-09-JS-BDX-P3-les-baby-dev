-- Active: 1704704362175@@127.0.0.1@3306@DBBabyplace
DROP DATABASE if EXISTS DBBabyplace;

create DATABASE if not exists DBBabyplace;

use DBBabyplace;

DROP TABLE if EXISTS user;

create table IF NOT EXISTS user (
    id int primary key auto_increment not null, email varchar(255) not null, password varchar(255) not null, is_admin bool, unique (email)
);

insert into
    user (email, password, is_admin)
values ('user@demo.com', '1234', 0),
    ('admin@demo.com', '1234', 1),
    ('usero@demo.com', '1234', 0),
    ('usera@demo.com', '1234', 0),
    ('adminz@demo.com', '1234', 1),
    ('useroh@demo.com', '1234', 0);

DROP TABLE if EXISTS structure;

CREATE TABLE IF NOT EXISTS structure (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(255), tel VARCHAR(10), adress VARCHAR(255), zip VARCHAR(6), city VARCHAR(255), avatarPath VARCHAR(255), structureDesc VARCHAR(500), psci INT DEFAULT 0, nesting BOOLEAN DEFAULT 0, montessori BOOLEAN DEFAULT 0, handicap BOOLEAN DEFAULT 0, jardin BOOLEAN DEFAULT 0, sorties BOOLEAN DEFAULT 0, promenades BOOLEAN DEFAULT 0, eveil BOOLEAN DEFAULT 0, musique BOOLEAN DEFAULT 0, art BOOLEAN DEFAULT 0, bilingue BOOLEAN DEFAULT 0, bibli BOOLEAN DEFAULT 0, transport BOOLEAN DEFAULT 0, maxPlaces INT DEFAULT 1, maxHandicap INT DEFAULT 0, maxUnder18Months INT DEFAULT 0, maxAtypicalHours INT DEFAULT 0, maxNightCare INT DEFAULT 0, isAdaptationRequired BOOLEAN DEFAULT 0, isRespectRequired BOOLEAN DEFAULT 0, isDoorRespectRequired BOOLEAN DEFAULT 0, isInfoTransmissionRequired BOOLEAN DEFAULT 0, isCleanArrivalRequired BOOLEAN DEFAULT 0, isJewelryRemovalRequired BOOLEAN DEFAULT 0, isMedicationAdminRequired BOOLEAN DEFAULT 0, isHandicapEnabled BOOLEAN DEFAULT 0, isUnder18MonthsEnabled BOOLEAN DEFAULT 0, isAtypicalHoursEnabled BOOLEAN DEFAULT 0, isNightCareEnabled BOOLEAN DEFAULT 0, FOREIGN KEY (user_id) REFERENCES user (id)
);

insert into
    structure (
        user_id, name, tel, adress, zip, city, avatarPath, structureDesc
    )
values (
        1, 'Adam Party', '0678252910', '17 rue gambetta', '33130', 'Bègles', '../src/assets/creche.jpeg', 'La crèche « Adam Party» n’est pas qu’un lieu de garde c’est surtout un lieu d’échange et d’accueil  des enfants et des familles dans une confiance réciproque où le respect, l’autonomie et la sécurité sont des références privilégiées dans notre projet.'
    ),
    (
        2, 'Chauchau Family', '0678252910', '12 rue Arsenal', '33000', 'Bordeaux', '../src/assets/creche2.jpeg', 'La crèche « Chauchau Family» n’est pas qu’un lieu de garde c’est surtout un lieu d’échange et d’accueil  des enfants et des familles dans une confiance réciproque où le respect, l’autonomie et la sécurité sont des références privilégiées dans notre projet.'
    ),
    (
        3, 'Victor and Co', '0678252910', '93 rue des praies', '33130', 'Villenave', '../src/assets/creche3.jpeg', 'La crèche « Victor and Co» n’est pas qu’un lieu de garde c’est surtout un lieu d’échange et d’accueil  des enfants et des familles dans une confiance réciproque où le respect, l’autonomie et la sécurité sont des références privilégiées dans notre projet.'
    );

DROP TABLE if EXISTS parent;

CREATE TABLE
    IF NOT EXISTS parent (
        id int primary key auto_increment not null,
        user_id INT NOT NULL,
        parentName VARCHAR(255),
        parentFName VARCHAR(255),
        profession VARCHAR(255),
        address VARCHAR(255),
        ville VARCHAR(255),
        telephone VARCHAR(10)
    );

ALTER TABLE parent
ADD CONSTRAINT `fk_user_id` FOREIGN KEY (user_id) REFERENCES user(id);

insert into
    parent (
        user_id,
        parentName,
        parentFName,
        profession,
        address,
        ville,
        telephone
    )
values (
        1, 'Mumu', 'didi', 'ambulanciere', '17 rue gambetta', '33130', '070707070'
    ),
    (
        3, 'Mateo', 'delavega', 'Pompier', '17 rue gambetta', '33130', '080808080'
    ),
        (
        3, 'rikit', 'aoaoab', 'Policier', '17 rue gambetta', '33130', '080808080'
    );

DROP TABLE if EXISTS reservation;

CREATE TABLE IF NOT EXISTS reservation (
    id int primary key auto_increment not null, structure_id INT NOT NULL, parent_id INT NOT NULL, dayResa VARCHAR(10) NOT NULL, startHour TIME NOT NULL, finishHour TIME NOT NULL, status BOOLEAN DEFAULT 0, message VARCHAR(300) NULL, FOREIGN KEY (structure_id) REFERENCES structure (id), FOREIGN KEY (parent_id) REFERENCES parent (id)
);

insert into
    reservation (
        structure_id, parent_id, dayResa, startHour, finishHour, status, message
    )
values (
        1, 1, 'lundi', '09:00:00', '17:00:00', 0, 'Hello je suis nouveau'
    ),
    (
        2, 2, 'mercredi', '10:00:00', '19:00:00', 0, 'pas moi'
    ),
    (
        3, 3, 'jeudi', '07:00:00', '16:00:00', 0, 'top'
    );

DROP TABLE if EXISTS hours;

CREATE TABLE IF NOT EXISTS hours (
    id int primary key auto_increment not null, structure_id INT NOT NULL, monday BOOLEAN DEFAULT 0, tuesday BOOLEAN DEFAULT 0, wednesday BOOLEAN DEFAULT 0, thursday BOOLEAN DEFAULT 0, friday BOOLEAN DEFAULT 0, saturday BOOLEAN DEFAULT 0, openHour TIME, closeHour TIME
);

ALTER TABLE hours
ADD CONSTRAINT `fk_structure_id` FOREIGN KEY (structure_id) REFERENCES structure (id);

insert into
    hours (
        structure_id, monday, tuesday, wednesday, thursday, friday, saturday, openHour, closeHour
    )
values (
        1, 0, 0, 1, 0, 0, 1, '08:00:00', '17:00:00'
    ), 
    (
       2, 0, 0, 0, 0, 0, 1, '07:00:00', '16:00:00'
    ),
    (
        3, 1, 0, 1, 0, 0, 0, '10:00:00', '19:00:00'
    );

DROP TABLE if EXISTS employee;

CREATE TABLE IF NOT EXISTS employee (
    id int unsigned primary key auto_increment not null, structure_id INT NOT NULL, files VARCHAR(255), name VARCHAR(255), fName VARCHAR(255), mail VARCHAR(255), fonction VARCHAR(255), FOREIGN KEY (structure_id) REFERENCES structure (id)
);

DROP TABLE if EXISTS child;

CREATE TABLE IF NOT EXISTS child (
    id int primary key auto_increment not null, parent_id INT NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NULL, birthday VARCHAR(255) NOT NULL, is_walking BOOLEAN DEFAULT 0, allergies BOOLEAN DEFAULT 0, medecine_traitant_name VARCHAR(255) NOT NULL, FOREIGN KEY (parent_id) REFERENCES parent (id)
);

insert into
    child (
        parent_id, firstname, lastname, birthday, is_walking, allergies, medecine_traitant_name
    )
values (
        1, 'daamn', 'neo', '12/09/2019', 0, 0, 'Dr Brigand'
    ), 
    (
        2, 'vic', 'neo', '12/09/2019', 0, 0, 'Dr Brigand'
    ),
    (
        3, 'mat', 'neo', '12/09/2019', 0, 0, 'Dr Brigand'
    );