DROP DATABASE if exists guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;

DROP DATABASE IF EXISTS guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;
CREATE TABLE guideInfo(
guide_id INT AUTO_INCREMENT,
name VARCHAR (255) NULL,
photo_link VARCHAR (255) NULL,
age INT NULL,
activity VARCHAR(500) NULL,
city VARCHAR(255) NULL,
<<<<<<< HEAD:app/data/sql/schema.sql
years_experience INT NULL,
activity_description VARCHAR(9001) NULL,
PRIMARY KEY (guide_id)
);
=======
yearsofExperience INT NULL,
descriptionActivity VARCHAR(9001) NULL,
PRIMARY KEY (guideID));
>>>>>>> c9b370a369a651d4351502859c5ab4995137d3fb
>>>>>>> 43014959ef4f5937132e37b5e2c4e6e21e96bfb6:app/data/schema.sql
