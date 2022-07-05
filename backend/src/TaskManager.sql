-- Active: 1657028019838@@127.0.0.1@3306
DROP DATABASE IF EXISTS TaskManager;

CREATE DATABASE TaskManager;

USE TaskManager;

CREATE TABLE statuses (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    title VARCHAR(60) NOT NULL,
    description VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (status_id)
        REFERENCES statuses (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO TaskManager.statuses (name) VALUES
    ("pendente"),
    ("em andamento"),
    ("pronto");

INSERT INTO TaskManager.tasks (title, description, created_at, updated_at, status_id) VALUES
    (
      "Título da tarefa",
      "Descrição da tarefa. É possível atualizar o status de uma tarefa, atualizar e deletar uma tarefa.",
      NOW(),
      NOW(),
      1
    );
