<<<<<<< HEAD
DROP DATABASE if exists guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;

CREATE TABLE traveler(
TravelerID INT AUTO_INCREMENT,
Name VARCHAR (255) NULL,
Location VARCHAR (100) NULL,
Preference VARCHAR (255) NULL,
PRIMARY KEY (TravelerID));

INSERT INTO traveler (Name, Preference) VALUES ('Kevin Malone', 'Cycling');
INSERT INTO traveler (Name, Preference) VALUES ('Creed Bratton', 'Bus Tours');
INSERT INTO traveler (Name, Preference) VALUES ('Oscar Martinez', 'Hiking');
INSERT INTO traveler (Name, Preference) VALUES ('Angela Martin', 'Sight Seeing');
INSERT INTO traveler (Name, Preference) VALUES ('Toby Flenderson', 'Beaches and Oceans');
INSERT INTO traveler (Name, Preference) VALUES ('Kelly Kapoor', 'Surfing');

SELECT * FROM traveler;
=======
DROP DATABASE IF EXISTS guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;
CREATE TABLE guideInfo(
guideID INT AUTO_INCREMENT,
name VARCHAR (255) NULL,
photolink NULL,
age INT NULL,
activity VARCHAR(500) NULL,
city VARCHAR(255) NULL,
yearsofExperience INT NULL,
descriptionActivity VARCHAR(9001) NULL,
PRIMARY KEY (guideID));
>>>>>>> c9b370a369a651d4351502859c5ab4995137d3fb
