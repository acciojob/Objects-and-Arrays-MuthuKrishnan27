const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team = players, team1 = [...players];
let cap1 = {...person};

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
// window.team1[0]="kishan";
// window.cap1 = cap1;
// window.cap1.name:"kishan";
// window.cap1["age"]:22;
