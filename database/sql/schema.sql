DROP DATABASE movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id NOT NULL int primary key auto_increment,
  title varchar(200) NOT NULL,
  year date,
  watched boolean,
);