/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 3");

const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const  getCLastName = 
    studentList.filter(element => element.lastName[0] == 'C')
    .map(element => {
        minScore = Math.min(...element.scores);
        maxScore = Math.max(...element.scores);
        avgScore = (element.scores.reduce((f, n) => (f + n))) / element.scores.length
        return {
            firstName: element.firstName,
            lastName: element.lastName,
            minScore,
            maxScore,
            avgScore
        }
    })

let cLastNameResults = getCLastName


console.log(cLastNameResults);