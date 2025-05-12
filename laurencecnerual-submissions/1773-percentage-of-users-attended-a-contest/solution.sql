-- Write your PostgreSQL query statement below
select contest_id, round(count(register.user_id) * 100 / user_count.total_users::numeric, 2) as percentage
from register
join
    (
        select count(*) as total_users from users
    )
as user_count
on true
group by contest_id, user_count.total_users
order by percentage desc, contest_id asc;
