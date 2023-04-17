// Code your solution here
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

// function findMatching(Array , name){
//     let result = Array.filter(el => el === name|| el.toLowerCase() === name.toLowerCase())
//     return result;
// }
function findMatching(Array, name) {
    return Array.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch (Array, letters){
    return Array.filter(el => el.startsWith(letters))
}
function matchName(colaction, name){
    return colaction.filter(el => el.name === name)
}