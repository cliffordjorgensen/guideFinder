DROP DATABASE guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;

CREATE TABLE traveler(
TravelerID INT AUTO_INCREMENT,
Name VARCHAR (255) NULL,
Age INT NULL,
Location VARCHAR (100) NULL,
PRIMARY KEY (TravelerID));

INSERT INTO traveler (Name, Age) VALUES ('Kevin Malone', 45);
INSERT INTO traveler (Name, Age) VALUES ('Creed Bratton', 55);
INSERT INTO traveler (Name, Age) VALUES ('Oscar Martinez', 32);
INSERT INTO traveler (Name, Age) VALUES ('Angela Martin', 23);
INSERT INTO traveler (Name, Age) VALUES ('Toby Flenderson', 45);

CREATE TABLE guide(
GuideID INT AUTO_INCREMENT,
Name VARCHAR (255) NULL,
Age INT NULL,
Location VARCHAR (100) NULL,
Experience INT NULL,
PRIMARY KEY (GuideID));

INSERT INTO guide (Name, Age, Experience) VALUES ('Michael Scott', 42, 11);
INSERT INTO guide (Name, Age, Experience) VALUES ('Jim Halpert', 34, 8);
INSERT INTO guide (Name, Age, Experience) VALUES ('Stanley Hudson', 49, 11);
INSERT INTO guide (Name, Age, Experience) VALUES ('Phyllis Smith', 42, 9);
INSERT INTO guide (Name, Age, Experience) VALUES ('Dwight Scrhute', 35, 10);
INSERT INTO guide (Name, Age, Experience) VALUES ('Pam Beesley', 29, 8);

SELECT * FROM traveler;

SELECT * FROM guide;