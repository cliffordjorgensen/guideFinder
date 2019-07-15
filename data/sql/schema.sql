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
yearsofExperience INT NULL,
descriptionActivity VARCHAR(9001) NULL,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
latitude DECIMAL(9,6),
longitude DECIMAL(9,6),
PRIMARY KEY (guideID)); 

SELECT * from guideinfo;

USE  guidefinder_db;
CREATE TABLE pictures(
picId INT AUTO_INCREMENT,
pic1 VARCHAR(255) NULL,
pic2 VARCHAR(255) NULL,
pic3 VARCHAR(255) NULL,
pic4 VARCHAR(255) NULL,
pic5 VARCHAR(255) NULL,
pic6 VARCHAR(255) NULL,
PRIMARY KEY (picId)); 

SELECT * from guideinfo INNER JOIN pictures ON guideinfo.guideID = pictures.picId;

USE guidefinder_db;
CREATE TABLE userCredential(
userID INT AUTO_INCREMENT,
firstName VARCHAR(255) NULL,
lastName VARCHAR(255) NULL,
accountname VARCHAR (255) NULL,
userpassword VARCHAR(255) NOT NULL,
latitude DECIMAL(9,6),
longitude DECIMAL(9,6),
PRIMARY KEY (userID));

SELECT * FROM userCredential;