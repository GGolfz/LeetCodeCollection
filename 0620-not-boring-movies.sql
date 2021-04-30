SELECT * FROM cinema WHERE mod(id,2) <> 0 AND description NOT LIKE 'boring' ORDER BY rating DESC
