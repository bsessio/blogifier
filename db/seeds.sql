CREATE TABLE posts (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
UserId VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
blogPost TEXT NOT NULL,
location VARCHAR(255) NOT NULL,
createdAt DATETIME DEFAULT NULL COMMENT 'created time',
updatedAt DATETIME DEFAULT NULL COMMENT 'created time'
);

CREATE TABLE users (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
UserId VARCHAR(255) NOT NULL,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
area VARCHAR(255) NOT NULL,
createdAt DATETIME DEFAULT NULL COMMENT 'created time',
updatedAt DATETIME DEFAULT NULL COMMENT 'created time'
);

INSERT INTO posts (name, location, UserID, blogPost) VALUES ('Bowie', 'San Antonio', 'User', 'This should work<br>Please fucking work');
INSERT INTO posts (name, location, UserID, blogPost) VALUES ('Nick', 'San Antonio', 'User', 'This should work<br>Please fucking work');
INSERT INTO posts (name, location, UserID, blogPost) VALUES ('Drew', 'San Antonio', 'User', 'This should work<br>Please fucking work');
INSERT INTO posts (name, location, UserID, blogPost) VALUES ('Tasha', 'San Antonio', 'User', 'This should work<br>Please fucking work');

INSERT INTO users (username, password, UserID, area) VALUES ('Bowie', '1234', 'User', 'San Antonio');
INSERT INTO users (username, password, UserID, area) VALUES ('Nick', '1234',  'User', 'San Antonio');
INSERT INTO users (username, password, UserID, area) VALUES ('Drew', '1234',  'User', 'San Antonio');
INSERT INTO users (username, password, UserID, area) VALUES ('Tasha', '1234',  'User', 'San Antonio');
