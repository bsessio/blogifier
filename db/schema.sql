-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS blogifier;
-- Creates the "blogger" database --
CREATE DATABASE blogifier;
-- Use database --
USE DATABASE blogifier;


CREATE TABLE `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `blogPost` VARCHAR( 255 ) NOT NULL,
  `password` PASSWORD,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);
