SELECT e.name AS Employee 
FROM Employee e 
JOIN employee m ON e.ManagerId = m.id
WHERE e.salary > m.salary
