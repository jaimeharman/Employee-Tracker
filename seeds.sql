-- Department Population
INSERT INTO employee_trackerDB.department (name) VALUES ('Sales');
INSERT INTO employee_trackerDB.department (name) VALUES ('Engineering');
INSERT INTO employee_trackerDB.department (name) VALUES ('Finance');
INSERT INTO employee_trackerDB.department (name) VALUES ('Legal');

-- Role Population
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Salesperson", 80000, 1);
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Lead Engineer", 150000, 2);
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Software Engineer", 120000, 2);
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Accountant", 125000, 3);
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Lawyer", 190000, 4);
INSERT INTO employee_trackerDB.employee_role (title, salary, department_id) VALUES ("Full Stack Developer", 110000, 2);
INSERT INTO employee_trackerDB.employee_role (title, salary) VALUES ('Team Lead', 95000);

-- Employees Population
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id) VALUES ('Dan', 'Kaltenbaugh', '3');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Jaime', 'Harman', '7', '1');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Danny', 'Steiger', '7', '1');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Melanie', 'Torres', '1', '5');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Sean', 'Capelle', '2', '1');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Matt', 'Joseph', '4', '1');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Jeremiah', 'Bullfrog', '5', '1');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id) VALUES ('Ron', 'Mathis', '6');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Jerry', '1', '5');
INSERT INTO employee_trackerDB.employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Kat', '8', '5');
    