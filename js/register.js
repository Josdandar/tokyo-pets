//Object literal

let petSalon = {
    name: "The Fashion Pet",
    phone: "555-555-555",
    addres:{
        street: "University",
        number: "7250",
        zip:"11176",
    },
    hours:{
        open: "9:00 AM",
        close: "17:00",
    },
    pets:[]
}

//Constructor 
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owner;
    this.contactPhone = phone;
    
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwnerName = document.getElementById("txtOwnerName");
let inputOwnerPhone = document.getElementById("txtPhone");
let tableToPlacePet = document.getElementById("petsTable");


// function validatePet(thePet){
//     let validation = true
//     if(thePet.name=""){
//         alert("Please enter the name");
//         validation=false;
//     }
//     return validatePet;
// }

function validatePet(thePet){
    let validation = false;
    inputName.classList.remove("alert-error")
    inputService.classList.remove("alert-error")
    if(thePet.name==""){
        validation = false;
        inputName.classList.add("alert-error");
    }
    if(thePet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }
    if(thePet.breed==""){
        validation = false;
        inputBreed.classList.add("alert-error")
    }
    return validation;
}

function register() {
  console.log(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputOwnerName.value,
    inputOwnerPhone.value
  );

  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputOwnerName.value,
    inputOwnerPhone.value
  );
  
  petSalon.pets.push(newPet);
  if (validatePet(newPet) == true) {
    console.log(newPet);
    console.log(petSalon.pets);
    displayInfo();
    clearForm();
  }

  let displayPet = petSalon.pets.forEach((pet)=>{
    tableToPlacePet.innerHTML += `
    <tr>
    <th>${pet.name}</th>
    <th>${pet.age}</th>
    <th>${pet.gender}</th>
    <th>${pet.breed}</th>
    <th>${pet.service}</th>
    <th>${pet.ownername}</th>
    <th>${pet.phone}</th>
    </tr>`
})

}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwnerName.value = "";
    inputOwnerPhone.value = "";
}



// function init(){
    
//     petSalon.pets.push(scooby, scrappy, winter); 
//     console.log(petSalon.pets)
    
    
    
// }

window.onload = init;
