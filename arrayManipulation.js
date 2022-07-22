//Array of numbers
const studentsScores = [80, 90, 70, 60, 50];

//array of strings
//const 

//Array of Objects
const studentsActivities = [
    {
        id: 1,
        description: "Having fun with session",
        isDone: True,
    },

    {
        id: 2,
        description: 'Starting the javascript, html, css react classes',
        isDone: false,
    },
   {
    id: 3,
    description: 'Starting the C# .NET classes',
    isDone: false,
   },
];

//converting array of object to jason
const studentsActivitiesJSON =JSON.stringify(studentsActivities)

//assessing the array elements
console.log(studentsScores[0]);
console.log(studentsScores[3]);
console.log(studentsScores[2]);
console.log(studentsActivities[2].description);
console.log(studentsActivities[1].isDone);