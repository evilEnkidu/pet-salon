var pets = [];

function PetConstruct(name, age, gender, breed, service, type){
    this.name = name; 
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service; 
    this.type = type;
}

function register(){
    let nameInput = document.getElementById("nameText").value;
    let ageInput = document.getElementById("ageText").value;
    let genderInput = document.getElementById("genderText").value;
    let breedInput = document.getElementById("breedText").value;
    let serviceInput = document.getElementById("serviceText").value;
    let typeSelection = document.getElementById("typeOption").value;

    let newPet = new PetConstruct(nameInput, ageInput, genderInput, breedInput, serviceInput, typeSelection);

    pets.push(newPet);
    document.getElementById("petForm").reset();
    console.log(pets);

    updateTable();
}
// study this
function updateTable(){
    let tableBody = document.getElementById("petsTableBody");
    tableBody.innerHTML = "";
    for (let i = 0; i < pets.length; i++){
        let pet = pets[i];
        let row = `<tr>
                   <th scope="row">${i + 1}</th>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }

}

function startingPets(){
    let pet1 = new PetConstruct("Shaggy", 2, 'M', 'Labrador', 'Neutering', 'Canine');
    let pet2 = new PetConstruct("Velma", 1, 'F', 'Corgi', 'Check-up', 'Canine');
    pets.push(pet1, pet2);
    updateTable();
}

window.onload=startingPets;