var pets = [];

function PetConstruct(name, age, gender, breed, service, type){
    this.name = name; 
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service; 
    this.type = type;
}
function isValid(pet){
    let validation = true;

    if (pet.name == "" || pet.age == ""){
        validation = false;
    }
    return validation;
}
function register(){
    let nameInput = document.getElementById("nameText").value;
    let ageInput = document.getElementById("ageText").value;
    let genderInput = document.getElementById("genderText").value;
    let breedInput = document.getElementById("breedText").value;
    let serviceInput = document.getElementById("serviceText").value;
    let typeSelection = document.getElementById("typeOption").value;

    let newPet = new PetConstruct(nameInput, ageInput, genderInput, breedInput, serviceInput, typeSelection);
    if (isValid(newPet) == true){
        pets.push(newPet);
        document.getElementById("petForm").reset();
        console.log(pets);
        updateTable();
    }
    else{
        alert("Please enter valid information");
        return false;
    }

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
            <td>
                <button type="button" class="btn btn-primary" onclick="editPet(${i})">Edit</button>
                <button type="button" class="btn btn-secondary" onclick="achievePet(${i})">Achieve</button>
                <button type="button" class="btn btn-danger" onclick="deletePet(${i})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    }

}

function startingPets(){
    let pet1 = new PetConstruct("Shaggy", 2, 'M', 'Labrador', 'Neutering', 'Canine');
    let pet2 = new PetConstruct("Velma", 1, 'F', 'Corgi', 'Check-up', 'Canine');
    pets.push(pet1, pet2);
    updateTable();
    updateCount();
}

window.onload=startingPets;

function updateCount(){
let total = pets.length;
let count = document.getElementById("petsTotal");
count.textContent = "(" + total + ")";

}
function deletePet(index){
    // remove pets from array
    pets.splice(index, 1);
    // reflect removal
    updateTable();
    // update count
    updateCount();
}