SELECT customer_number FROM (
    SELECT customer_number, COUNT(*) as c FROM orders
    GROUP BY customer_number
    ORDER BY c DESC
    LIMIT 1
) max_customer
