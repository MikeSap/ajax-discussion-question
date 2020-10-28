const fullname = document.getElementById(“fullname”);
console.log(“CONTENT NOT YET LOADED!“, fullname); 
//what will fullname evaluate to?
document.addEventListener(“DOMContentLoaded”, () => {
  console.log(“CONTENT LOADED!“);
});

const b = document.querySelector(‘button’)
const name = document.getElementById(‘fullname’)
const pic = document.getElementById(‘profile_picture’)
const email = document.getElementById(‘email’)
const street = document.getElementById(‘street’)
const city = document.getElementById(‘city’)
const state = document.getElementById(‘state’)
const postcode = document.getElementById(‘postcode’)
const phone = document.getElementById(‘phone’)
const cell = document.getElementById(‘cell’)
const dob = document.getElementById(‘date_of_birth’)
let data

function fetchData(){
  fetch(“https://randomuser.me/api/”)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    renderPerson(json)
  })
}

function renderPerson(json){
  debugger
  pic.src = json.results[0][“picture”][‘medium’]
  name.append(`${json.results[0][‘name’][‘first’]} ${json.results[0][‘name’][‘last’]}`)
}