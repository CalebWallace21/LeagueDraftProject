INSERT INTO teams
(first_url, second_url, third_url, fourth_url, fifth_url, user_id, description)
VALUES
($1, $2, $3, $4, $5, $6, $7);

SELECT * FROM teams
WHERE user_id = $6;