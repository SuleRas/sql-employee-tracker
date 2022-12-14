// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

//promptuser
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'task',
        message: 'What would you like to do',
        choices:["View all departments", "add department", "view all roles", "add role", "view all employee" ,"add employee"]
      },
    ]).then(answers => {
     switch (answers.task) {
         case "View all departments":
             viewDepartments();
             break;
             case "add department":
             addDepartment();
             break;

             case "view all roles":
                 roles();
                 break;
                 case "add role":
                 addRole();
                 break;
                   case "view all employee":
                 viewEmployee();
                 break;
                 case "add employee":
                    addEmployee();
                    break;
     
         default:
             break;
     }
    })
}
// to do Query database
function viewDepartments(){
    const sql = `SELECT * FROM department`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        
         return;
      }
      console.table(rows)
      promptUser()
    });
    
}
function addDepartment(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'deptname',
            message: 'Please enter your department name',   
        }
    ]).then(answers => {
        const sql = `INSERT INTO department (name)
        VALUES (?)`;
      const params = [answers.deptname];
      
      db.query(sql, params, (err, result) => {
        if (err) {
         
          return;
        }
       console.log("Department added")
       promptUser()
      });
    })

    }
    function roles(){
        const sql = `SELECT * FROM role`;
      
        db.query(sql, (err, rows) => {
          if (err) {
            
             return;
          }
          console.table(rows)
          promptUser()
        });
        
    }

    function addRole(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Please enter your title',   
            } ,
            {
                type: 'input',
                name: 'salary',
                message: 'Please enter your salary',   
            } ,
            {
                type: 'input',
                name: 'departmentId',
                message: 'Please enter department role',  
                choices: ["Sales","I.T","Finance","HR"],
                
            }
        ]).then(answers => {
            const sql = `INSERT INTO role (title, salary , department_id)
            VALUES (?,?,?)`;
          const params = [answers.title, answers.salary, answers.departmentId];
          
          db.query(sql, params, (err, result) => {
            if (err) {
             
              return;
            }
           console.log("Role added")
           promptUser()
          });
        })
    
        }

        function viewEmployee(){
            const sql = `SELECT * FROM employee`;
          
            db.query(sql, (err, rows) => {
              if (err) {
                
                 return;
              }
              console.table(rows)
              promptUser()
            });
            
        }

        function addEmployee(){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstname',
                    message: 'Please enter your first name',   
                } ,
                {
                    type: 'input',
                    name: 'lastname',
                    message: 'Please enter your last name',   
                } ,
                {
                    type: 'input',
                    name: 'role',
                    message: 'Please enter your employee role ',   
                    choices: ["Manager", "Director", "Senior Software Engineer","HR Staff"],
                } ,
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Please enter your boss id',
                    choices: ["David", "Neymar", "Cristiano","George"]

                }
            ]).then(answers => {
                const {firstname,
                    lastname,
                    role,
                    managerId} = answers
                const sql = `INSERT INTO employee (first_name, last_name , role_id, manager_id)
                VALUE (?,?,?,?)`;

              const params = [firstname, lastname, parseInt(role, 10), parseInt(managerId, 10)];
              
              db.query(sql, params, (err, result) => {
                if (err) {
                 console.log(err)
               db.end()

                  return;
                }
               console.log("Employee added")
               db.end()
               promptUser()
              });
            })
        
            }
            
        

promptUser();