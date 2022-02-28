CREATE TABLE contacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE contacts(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    age VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    tags VARCHAR(255) NOT NULL,
    avatar BYTEA,
);