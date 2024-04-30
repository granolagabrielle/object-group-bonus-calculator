// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let totalBonus;
  for (let person of employee) {
    // nested loop to search for rating
    for (let reviewRating of person) {
      if (reviewRating <= 2) {
        totalBonus + 0
      } else if (reviewRating === 3) {
        totalBonus + (0.04 * person.annualSalary);
      } else if (reviewRating === 4) {
        totalBonus + (0.06 * person.annualSalary);
      } else if (reviewRating === 5) {
        totalBonus + (0.1 * person.annualSalary);
      } 
      }
    for (let salary of person) {
      if (person.annualSalary > 65000) {
        totalBonus - (0.01 * person.annualSalary)
      }
    }
    for (let i=0; i < employee[i].employeeNumber.length; i++){
      if (employeeNumber.length === 4){
        totalBonus + (0.05 * employee[i].annualSalary);
      }
    }
  }
  }
  

  
  
  
// ----------BONUS LOGIC--------------
  // rating of a 2 or below = 0% bonus
  // rating of 3  = 4% bonus
  // rating of 4 = 6% bonus
  // rating of 5 = 10% bonus
  // if employee number is 4 digits long, give an additional 5%
  // if annual income is greater than 65k, adjust bonus down 1%
// -----------------------------------

  
  // return new object with bonus results
return totalBonus;
}