/*
     Average age sum
*/

const AvgFamilyAge = [
    {
        name: "Akash",
        age:81
    },
    {
        name: "Bikash",
        age:50
    },
    {
        name: "Prakash",
        age:17
    },
    {
        name: "Rakesh",
        age:29
    },
    {
        name: "Vishal",
        age:44
    }
]

const totaAge = AvgFamilyAge.reduce((acc, cur) => acc + cur.age , 0);
const averageAge = totaAge / AvgFamilyAge.length;
console.log(averageAge);