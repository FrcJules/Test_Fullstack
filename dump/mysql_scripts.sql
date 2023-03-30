CREATE TABLE user (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user (username, password)
VALUES ('user1', 'password1'), ('user2', 'password2'), ('user3', 'password3');