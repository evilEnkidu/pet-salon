pet1 = {
	petName : "Cocoa Herrera",
	age : 5,
	gender : "F",
	service : "Grooming",
	breed : "Boxer"
}
pet2 = {
	petName : "Bala",
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
