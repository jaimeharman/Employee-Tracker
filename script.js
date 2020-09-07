const userChoice = [
    "View All Departments",
    "View All Roles",
    "View All Employees",
    "Add Department",
    "Add Role",
    "Add Employee",
    "Update Employee Role",
    "Exit Program",
  ];
  promptUser = () => {
    inquirer
      .prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: userChoice,
      })
      .then((answer) => {
        switch (answer.choice) {
          case userChoice[0]:
            viewDept();
            break;
  
          case userChoice[1]:
            viewRole();
            break;
  
          case userChoice[2]:
            viewEmployee();
            break;
  
          case userChoice[3]:
            addDept();
            break;
  
          case userChoice[4]:
            addRole();
            break;
  
          case userChoice[5]:
            addEmployee();
            break;
  
          case userChoice[6]:
            updateEmployee();
            break;
  
          case userChoice[7]:
            connection.end();
            break;
        }
      });
  };
  