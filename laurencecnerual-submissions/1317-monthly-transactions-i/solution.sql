-- Write your PostgreSQL query statement below
select 
    to_char(trans_date,'YYYY-MM') as month, 
    country, 
    count(state) as trans_count, 
    count(CASE WHEN state='approved' THEN 1 END) as approved_count,
    sum(amount) as trans_total_amount,
    sum(CASE WHEN state='approved' THEN amount ELSE 0 END) as approved_total_amount
from transactions
group by month, country;
