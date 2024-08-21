// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn'); 

// Collect employee data
  const employees = [];
  function collectEmployees() {
    let addEmployee = true;

    while (addEmployee) {
      const firstName = prompt("Enter employee's first name:");
      const lastName = prompt("Enter employee's last name:");
      let salary = prompt("Enter employee's salary:");

      if(isNaN(salary)) {  
        salary = 0; //Default to $0 if not a valid number
      } else {
        salary = parseFloat(salary); // Convert salary to a number
      } 
 //Get user input to create and return an array of employee objects
      const employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      };

      employees.push(employee);
      addEmployee = confirm("Do you want to add another employee?");
      console.log (addEmployee);
    }
      return employees;
  }    

 // Display the average salary
const displayAverageSalary = function(employeesArray)  {     
    let totalSalary = 0;
    employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

const numberOfEmployees = employeesArray.length;
const averageSalary = totalSalary / numberOfEmployees;

console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
};

// Select and display a random employee
const getRandomEmployee = function(employeesArray) { 
  const randomIndex = Math.floor(Math.random()* employeesArray.length);
  const randomEmployee = employeesArray [randomIndex];

  console.log(`Congratulation to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
// Get the employee table
  const employeeTable = document.querySelector('#employee-table');

// Clear the employee table
  employeeTable.innerHTML = '';

// Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
// Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
