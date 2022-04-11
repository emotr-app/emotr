-- To run this code, move to the db directory, and use:
-- psql -d postgres://gebczpbk:ak30fhQP994saKuRWWvus3I1SPlLantB@batyr.db.elephantsql.com/gebczpbk -f db.sql

-- To interact with database, use:
-- psql postgres://gebczpbk:ak30fhQP994saKuRWWvus3I1SPlLantB@batyr.db.elephantsql.com/gebczpbk

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  _id SERIAL,
  PRIMARY KEY(_id)
);

DROP TABLE IF EXISTS messages;
CREATE TABLE messages(
  _id SERIAL,
  _user_id INT,
  message VARCHAR(16),
  pfp VARCHAR(1),
  PRIMARY KEY(_id),
  CONSTRAINT fk_user_id
    FOREIGN KEY(_user_id)
      REFERENCES users(_id)
      ON DELETE CASCADE
);




