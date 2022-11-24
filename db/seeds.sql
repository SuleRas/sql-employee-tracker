INSERT INTO department (name)
 
 VALUES("Sales"),
       ("I.T"), 
       ("Finance"), 
       ("HR");
    



INSERT INTO role (title, salary, department_id)
 
 VALUES("Manager", 10000 , 1),
       ("Director", 80000 , 2),
       ("Senior Software Engineer", 50000 , 3),
       ("HR Staff", 30000 , 4);




INSERT INTO employee (first_name, last_name, role_id, manager_id)
 
 VALUES("David", "Beckham", 1, NULL),
       ("Neymar", "Junior", 2, NULL),
       ("Cristiano", "Ronaldo", 3, NULL),
       ("George", "Best", 4, NULL);
    