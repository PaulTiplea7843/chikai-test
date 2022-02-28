
/* These are the steps you need to follow for the db configuration:
1. Open terminal and run  sudo -u postgres psql 
2. After that run these commands: - create user 'postgres' with encrypted password 'asdQWE123';
                                  - grant all privileges on database contacts to postgres;
3. After that  run all these command bellow this comment one at a time.                              
*/

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
    avatar text,
);