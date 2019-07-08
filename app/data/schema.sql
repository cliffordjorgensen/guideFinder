DROP DATABASE if exists guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;

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
