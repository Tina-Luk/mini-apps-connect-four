DROP DATABASE IF EXISTS Connect4;

CREATE DATABASE Connect4;

USE Connect4;

CREATE TABLE Winner (
  ID INT PRIMARY KEY AUTO_INCREMENT, 
  Player VARCHAR(20), 
  Wins INT
);

INSERT INTO Winner (Player, Wins) values ('Red', 0);
INSERT INTO Winner (Player, Wins) values ('Black', 0);