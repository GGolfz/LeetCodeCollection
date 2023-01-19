SELECT name FROM customer WHERE ISNULL(referee_id) OR NOT(referee_id = 2)
