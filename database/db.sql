CREATE DATABASE taskdb;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(25)
)

id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

INSERT INTO tasks (title,description) VALUES('The Data Science Handbook','Advice and Insights')
INSERT INTO tasks (title,description) VALUES('Doing Data Science','Straight Talk')
INSERT INTO tasks (title,description) VALUES('Straight Talk from the Frontline de Cathy ONeil y Rachel Schutt','va directo al punto')
INSERT INTO tasks (title,description) VALUES('Roger D. Peng y Elizabeth Matsui','The Art of Data Science')
INSERT INTO tasks (title,description) VALUES('Data Science For Dummies de Lillian Pierson','La serie "Dummies"')
INSERT INTO tasks (title,description) VALUES('Judith Hurwitz, Alan Nugent, Fern Halper y Marcia Kaufman','El libro cubre ce')
