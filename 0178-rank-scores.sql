SELECT s.Score as Score, rnk.Rank as `Rank`
FROM Scores s 
JOIN (SELECT *, ROW_NUMBER() OVER (ORDER BY Score DESC) AS 'Rank' 
      FROM (SELECT DISTINCT Score FROM Scores) AS r2) AS rnk 
ON s.Score=rnk.Score
ORDER BY rnk.Rank ASC
