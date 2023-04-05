DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS car;

CREATE TABLE car (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nomLoueur VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  marque VARCHAR(255) NOT NULL,
  modele VARCHAR(255) NOT NULL,
  annee INT(11) NOT NULL,
  cityId INT(11) NOT NULL,
  prix INT(11) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user (username, password)
VALUES ('user1', 'password1'), ('user2', 'password2'), ('user3', 'password3');