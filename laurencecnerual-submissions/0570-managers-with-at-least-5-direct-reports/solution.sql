-- Write your PostgreSQL query statement below
select name from employee as e1
join 
    ( 
        select managerid from employee
        group by managerid
        having count(managerid) >= 5
    )
as e2
on e1.id=e2.managerid;
