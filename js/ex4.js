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

const resultStudent = studentList.map(element => {
    const updatedScore = element.scores.map(score => score + 5);
    const avgScore = updatedScore.reduce((total, score) => total + score) / updatedScore.length;
    return {
        firstName: element.firstName,
        lastName: element.lastName,
        scores: [...updatedScore, avgScore],
    }
});

for (let element of resultStudent) {
    console.log(`Full name (last, first): ${element.lastName}, ${element.firstName}`);
    console.log(`Updated scores are: ${element.scores}`);
}