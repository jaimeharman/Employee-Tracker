var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");


//Connection login
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Loupgarou17!",
  database: "employee_trackerDB",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  main();
});

function main() {
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
}

function viewRoles() {
  let query = "SELECT * FROM employee_db.role;";

  connection.query(query, function (err, res) {
    if (err) return err;
    console.table(res);
    main();
  });
}

function viewEmployees() {
  let query =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, employee.manager_id FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id) ORDER BY employee.id ASC;";
  connection.query(query, function (err, res) {
    if (err) return err;
    console.table(res);
    main();
  });
}

function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDept",
        message: "What will the name of the department be?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.addDept,
        },
        function (err, res) {
          if (err) throw err;
          console.log("Department added.\n");
          main();
        }
      );
    });
}

function addRole() {
  let query = "SELECT * FROM department;";
  connection.query(query, function (err, res) {
    if (err) return err;
    let deptChoice = res.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "input",
          name: "Title",
          message: "Enter employee title:",
        },
        {
          type: "input",
          name: "Salary",
          message: "Enter employee salary:",
        },
        {
          type: "list",
          name: "Dept_ID",
          message: "Choose department for employee:",
          choices: deptChoice,
        },
      ])
      .then((answer) => {
        connection.query("INSERT INTO role SET ?"),
          {
            title: answer.Title,
            salary: answer.Salary,
            department_id: answer.Dept_ID,
          },
          function (err, res) {
            if (err) throw err;
            console.log("Role added.\n");
            console.table(answer);
            main();
          };
      });
  });
}

function updateEmployee() {
  for (i = 0; i < results.length; i++) {
    let name = results[i].first_name + " " + results[i].last_name;
    let employee = {
      name: name,
      value: results[i].id,
    };
    employees.push(employee);
  }
  let query = "SELECT * FROM role;";
  connection.query(query, function (err, res) {
    if (err) return err;
    let roleChoice = res.map(({ id, title }) => ({
      name: title,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "Employee_Name",
          message: "Select an employee to update:",
          choices: employees,
        },
        {
          type: "list",
          message: "Select new role for employee:",
          name: "New_Role",
          choices: roleChoice,
        },
      ])
      .then(function (answer) {
        connection.query(
          "UPDATE employee SET ?",
          {
            role_id: answer.New_Role,
          },
          function (err, res) {
            if (err) throw err;
            console.log("Role updated.\n");
            console.table(answer);
            main();
          }
        );
      });
  });
}
