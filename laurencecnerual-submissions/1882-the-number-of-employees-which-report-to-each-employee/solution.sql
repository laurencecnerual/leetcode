-- Write your PostgreSQL query statement below
select m.employee_id, m.name, count(e.reports_to) as reports_count, round(avg(e.age), 0) as average_age from employees as e
join employees as m on e.reports_to = m.employee_id
group by m.employee_id, m.name
having m.employee_id is not null
order by m.employee_id;
