DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id NOT NULL int primary key auto_increment,
  title varchar(200) NOT NULL,
  release_date date,
  watched boolean,
  vote_count int
);