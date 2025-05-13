-- Write your PostgreSQL query statement below
select 
    round(count(case when order_date=customer_pref_delivery_date then 1 end) * 100 / count(order_date)::numeric, 2) as immediate_percentage
from (select distinct on (customer_id) * from delivery order by customer_id, order_date);
