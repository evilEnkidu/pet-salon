pet1 = {
	petName : "Cocoa",
	age : 5,
	gender : "F",
	service : "Grooming",
	breed : "Boxer"
}
pet2 = {
	petName : "Apollo",
	age : 4,
	gender : "M",
	service : "Check-up",
	breed : "German Sheperd"
}
pet3 = {
	petName : "Gala",
	age : 2,
	gender : "F",
	service : "Check-up",
	breed : "Mixed"
}

let pets = [pet1, pet2, pet3];

let petCount = pets.length;

let petAgeAverage = parseFloat((pets[0].age + pets[1].age + pets[2].age)/pets.length).toFixed(2);

let countDisplay = document.getElementById("petcount");
countDisplay.innerHTML = petCount;
let averageAgeDisplay = document.getElementById("average-age");
averageAgeDisplay.innerHTML = petAgeAverage;

let petNames = document.getElementById("names");
for (let i = 0; i < pets.length; i++){
	let paragraph = document.createElement("p");
	paragraph.textContent = pets[i].petName;
	petNames.appendChild(paragraph);
}