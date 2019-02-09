const allCars = [
  {
    model: "Mustang",
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
  },
  {
    model: "Xterra",
    color: "Forest Green",
    year: 2011,
    length: 144,
    width: 71,
    height: 55
  },
  {
    model: "Thunderbird",
    color: "Red",
    year: 2005,
    length: 115,
    width: 58,
    height: 42
  },
  {
    model: "Suburban",
    color: "Grey",
    year: 2015,
    length: 149,
    width: 73,
    height: 58
  }
]


// review dot notation

// review square bracket notation
const carType = "model";
// Loop through the cars with a .forEach and print each carType to the DOM

// ----- Object.values() -----//

// const outputElement = document.querySelector("#app")

// Iterate over all the cars
// Use Object.values() to get an array of all the values in each car object
// Loop through the values and print them to the DOM


// ---- LIGHTNING EXERCISE SET ONE ---//

// ------- Object.keys() --------//

// Create a search bar and a dropdown of all the keys so they can choose which thing to search by

Object.keys(allCars[0]).forEach(key => {
  document.querySelector("#categoryList").innerHTML += `<option value=${key}>${key}</option>`
})

document.querySelector("#search-btn").addEventListener("click", () => {
  const searchCategory = document.querySelector("#categoryList").value;
  const searchValue = document.querySelector("#search-input").value;
  const searchResult = allCars.find(singleCar => singleCar[searchCategory].includes(searchValue));
  console.log(searchResult);
})


// ---- LIGHTNING EXERCISE SET TWO ---//
// ------ Object.entries() -----//

// Use object.entries() to print all the data in this object in the following format
// model - thunderbird
// color - red


// ---- LIGHTNING EXERCISE SET THREE ---//


