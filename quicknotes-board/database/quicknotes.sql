CREATE DATABASE quicknotes;

USE quicknotes;

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    color VARCHAR(50) NOT NULL
);