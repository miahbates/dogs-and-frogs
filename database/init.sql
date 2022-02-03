BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

-- Create tables and define their columns

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  email text UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id),
  animal_name VARCHAR,
  type VARCHAR,
  description VARCHAR,
  image BYTEA
);

DROP TABLE IF EXISTS sessions CASCADE;

CREATE TABLE sessions (
  sid text PRIMARY KEY, 
  user_info JSON
);

-- Insert some example data for us to test with

INSERT INTO users (username, email, password) VALUES
  ('juliettep', 'juliette@juliette.com', '123'),
  ('olij', 'oli@oli.com', '123')
;

INSERT INTO posts (animal_name, type, description) VALUES
  ('gus', 'dog', 'friendly whippet'),
  ('legolas', 'frog', 'long legs')
  
;

INSERT INTO sessions (sid, user_info) VALUES (
  'abc123',
  '{"test":"stuff"}'
);

COMMIT;







