DROP DATABASE IF EXISTS movieapp;

CREATE DATABASE movieapp;

USE movieapp;

CREATE TABLE movies (
  id int NOT NULL  primary key auto_increment,
  title varchar(200) NOT NULL,
  -- movie_id int, 
  release_date date,
  watched boolean,
  vote_count int
);