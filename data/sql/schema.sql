DROP DATABASE IF EXISTS guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;
CREATE TABLE guideinfo(
guideID INT AUTO_INCREMENT,
name VARCHAR (255) NULL,
photolink VARCHAR(255) NULL,
age INT NULL,
activity VARCHAR(500) NULL,
city VARCHAR(255) NULL,
<<<<<<< Updated upstream
years_experience INT NULL,
activity_description VARCHAR(9001) NULL,
PRIMARY KEY (guide_id)
);
=======
yearsofExperience INT NULL,
descriptionActivity VARCHAR(9001) NULL,
PRIMARY KEY (guideID)); 

SELECT * from guideinfo;
>>>>>>> Stashed changes
