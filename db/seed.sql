CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  hash VARCHAR(3000)
);

CREATE TABLE teams (
  team_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id)
  first_url varchar(120),
  second_url varchar(120),
  third_url varchar(120),
  fourth_url varchar(120),
  fifth_url varchar(120),
  description TEXT
);