-- Write your PostgreSQL query statement below
WITH salary_categories AS (
    SELECT 'Low Salary' AS category
    UNION ALL
    SELECT 'Average Salary'
    UNION ALL
    SELECT 'High Salary'
),
income_summary AS (
    select
        case
            when income < 20000 then 'Low Salary'
            when income between 20000 and 50000 then 'Average Salary'
            when income > 50000 then 'High Salary'
        end as category,
        count(income) as accounts_count
    from accounts
    group by  
        case
            when income < 20000 then 'Low Salary'
            when income between 20000 and 50000 then 'Average Salary'
            when income > 50000 then 'High Salary'
        end
)
SELECT
    c.category,
    COALESCE(s.accounts_count, 0) AS accounts_count
FROM salary_categories c
LEFT JOIN income_summary s ON c.category = s.category;
