/*
     senior employee
*/

const employee = [
    {
        name: "Akash",
        numOfYears:8
    },
    {
        name: "Bikash",
        numOfYears:5
    },
    {
        name: "Prakash",
        numOfYears:1
    },
    {
        name: "Rakesh",
        numOfYears:2
    },
    {
        name: "Vishal",
        numOfYears:4
    }
]

const result = employee.filter(employee => employee.numOfYears > 3).map(employee =>  employee.name);
console.log(result);