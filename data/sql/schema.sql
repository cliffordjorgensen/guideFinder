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
years_experience INT NULL,
activity_description VARCHAR(9001) NULL,
PRIMARY KEY (guide_id)
);
