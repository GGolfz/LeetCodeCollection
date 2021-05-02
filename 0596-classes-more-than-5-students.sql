SELECT c.class FROM (SELECT DISTINCT student,class FROM courses) c GROUP BY class HAVING COUNT(student) >= 5
