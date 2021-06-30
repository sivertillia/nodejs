CREATE DATABASE team1_api;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    firstname VARCHAR(200),
    lastname VARCHAR(200)
);

-- {
--     "email": "qweqew",
--     "password": "asdasdasdasdas",
--     "firstname": "Game",
--     "lastname": "GG"
-- }