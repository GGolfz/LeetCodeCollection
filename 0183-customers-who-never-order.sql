SELECT c.Name AS Customers 
FROM Customers c 
LEFT JOIN Orders o on c.Id = o.CustomerId 
WHERE o.Id is null
