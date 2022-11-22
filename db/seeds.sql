INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("I.T"), 
    ("Finance"), 
    ("Human Resources"), 
    


INSERT INTO role (title, salary, department_id)
VALUES
    ("Manager", 120000.00, 1),
    ("Director", 900000.00, 2),
    ("Senior Software Engineer", 45000.00, 3),
    ("HR Staff", 30000.00, 4),




INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("David", "Beckham", 1, NULL),
    ("Neymar", "Junior", 2, NULL),
    ("Cristiano", "Ronaldo", 3, NULL),
    ("George", "Best", 4, NULL),
    