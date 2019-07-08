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