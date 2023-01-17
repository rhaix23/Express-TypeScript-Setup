CREATE DATABASE authentication;

CREATE TABLE user (
    id INT SERIAL PRIMARY KEY,
    username VARCHAR(128),
    password VARCHAR(128),
    refresh_token VARCHAR(255),
    CONSTRAINT unique_username UNIQUE (username)
);