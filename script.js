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
// const firstModel = allCars[0].model;
// console.log(firstModel);
// review square bracket notation
const carType = "model";
const firstModel = allCars[0][carType];
// console.log(firstModel);

// Loop through the cars with a .forEach and print each carType to the DOM using bracket notation

allCars.forEach(singleCar => {
  // console.log(singleCar[carType])
})

// ----- Object.values() -----//

const valueArray = Object.values(allCars[0])
// console.log(valueArray);

// const outputElement = document.querySelector("#app")

// Iterate over all the cars
// Use Object.values() to get an array of all the values in each car object
// Loop through the values and print them to the DOM
//

// ---- LIGHTNING EXERCISE SET ONE ---//


// ---- SET ONE --//
// Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate.
const doctorBill = {
  officeName: "Office of The Doctor",
  streetAddress: "123 Sesame St",
  doctorName: "Joe",
  patientName: "Sally",
  visitDate: "2/14/2019",
  amountBilled: 30.00,
  dueDate: "3/14/2019"
}
// Copy the code below and paste it above your object.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

// Use square bracket notation to output the value of those three properties to the console in Chrome.
// console.log(doctorBill[dateVisited], doctorBill[owed], doctorBill[patient])

// Use Object.values() to output all the property values to the console in Chrome.
// const doctorBillValues = Object.values(doctorBill);

// for(key in doctorBill){
//   console.log(key);
//   console.log(doctorBill[key])
// }


// ------- Object.keys() --------//

const carKeys = Object.keys(allCars[0])
carKeys.forEach(singleKey => {
  document.querySelector("#categoryList").innerHTML += `<option value=${singleKey}>${singleKey}</option>`
})

document.querySelector("#search-btn").addEventListener("click", () => {
  const searchCategory = document.querySelector("#categoryList").value
  const searchEntry = document.querySelector("#search-input").value
  const searchResult = allCars.find(singleCar => singleCar[searchCategory].includes(searchEntry));
  console.log(searchResult);
  // allCars.forEach(singleCar => {
  //     Object.values(singleCar).forEach(singleValue => {
  //       document.querySelector("#app").innerHTML += `<p>${singleValue}</p>`
  //     })
  //   })

})

// Create a search bar and a dropdown of all the keys so they can choose which thing to search by



// ---- LIGHTNING EXERCISE SET TWO ---//


// ---- SET TWO ----//
// Use Object.keys() to output all of the key names from your doctor's office bill to the console in Chrome.
const doctorKeys = Object.keys(doctorBill);
console.log(doctorKeys);

// Next, output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
doctorKeys.forEach(singleKey => {
  document.querySelector("#doctor").innerHTML += `<span> ${singleKey}</span>`;
})


// ------ Object.entries() -----//

// const carEntries = Object.entries(allCars[0]);
// console.log(carEntries);
// Use object.entries() to print all the data in this object in the following format
// model - thunderbird
// color - red
allCars.forEach(singleCar => {
  const carEntries = Object.entries(singleCar);
  console.log(carEntries);
  carEntries.forEach(smallerArray => {
    console.log(`${smallerArray[0]} - ${smallerArray[1]}`)
  })
})



// ---- LIGHTNING EXERCISE SET THREE ---//
// -- SET THREE -- //

// Create an object to represent your favorite dinner item(e.g.meatloaf, spaghetti, fried fish, gumbo).Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favoriteFood = {
  name: "Spaghetti",
  ethnicity: "Italian",
  ingredients: ["Pasta", "Tomatoes", "Garlic", "Onions", "Salt"],
  calories: 0
}
// Output all of the key / value pairs into the DOM inside an < article > element with a class of food.
const favoriteFoodInfo = Object.entries(favoriteFood);
console.log(favoriteFoodInfo);
favoriteFoodInfo.forEach(smallerArray => {
  document.querySelector(".food").innerHTML += `<p>My favorite food's ${smallerArray[0]} is ${smallerArray[1]}</p>`
})


