-- Write your PostgreSQL query statement below
select s.product_id, s.year as first_year, quantity, price
from sales as s
join (select product_id, min(year) as year from sales group by product_id) as earliest
on s.product_id = earliest.product_id and s.year = earliest.year;

