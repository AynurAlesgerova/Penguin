// const myImage = document.querySelector("img");
// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };



// myButton.onclick = () => {
//     setUserName();
//   };

// // first way
// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     if (!localStorage.getItem("name")) {
//         setUserName();
//       } else {
//         const storedName = localStorage.getItem("name");
//         myHeading.textContent = `Mozilla is cool, ${storedName}`;
//       }
//   }

// // second way
//   function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
//   }



// ---------String methods-----------
// const browserType= "Hello Aynur"
// browserType.length
// browserType.includes("lo")
// browserType.indexOf("Aynur")
// browserType.startsWith("H")
// browserType.endsWith("H")
// browserType.slice(1, 4) - ello
// toUpperCase() or toLowerCase()
// browserType.replace("Hello", "Hi")

// let quote = "To be or not to be";
// quote = quote.replaceAll("be", "code");


// ----------Array Methods-------------
// const random = ["tree", 795, [0, 1, 2]];
// random[2][2];

// indexOf()
// const birds = ["Parrot", "Falcon", "Owl"];
// console.log(birds.indexOf("Owl")); //  2

// push()
// To add one or more items to the end of an array we can use push()
// const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]

// unshift()
// To add an item to the start of the array, use unshift():
// const cities = ["Manchester", "Liverpool"];
// cities.unshift("Edinburgh");
// console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

// pop()
// To remove the last item from the array, use pop().
// const cities = ["Manchester", "Liverpool"];
// cities.pop();
// console.log(cities); // [ "Manchester" ]

// The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
// const cities = ["Manchester", "Liverpool"];
// const removedCity = cities.pop();
// console.log(removedCity); // "Liverpool"


// shift()
// To remove the first item from an array, use shift():
// const cities = ["Manchester", "Liverpool"];
// cities.shift();
// console.log(cities); // [ "Liverpool" ]


// If you know the index of an item, you can remove it from the array using splice():
// the first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:
// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// const index = cities.indexOf("Liverpool");
// if (index !== -1) {
//   cities.splice(index, 2);
// }
// console.log(cities); // [ "Manchester", "Carlisle" ]


// If you want to access every item in the array. You can do this using the for...of statement:
// const birds = ["Parrot", "Falcon", "Owl"];

// for (const bird of birds) {
//   console.log(bird);
// }


//  map()
// function double(number) {
//     return number * 2;
// }
// const numbers = [5, 2, 7, 6];
// const doubled = numbers.map(double);
// console.log(doubled); // [ 10, 4, 14, 12 ]

//  filter()
// function isLong(city) {
//     return city.length > 8;
// }
// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
// const longer = cities.filter(isLong);
// console.log(longer); // [ "Liverpool", "Edinburgh" ]


//  toString()
// const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// dogNames.toString(); // Rocket,Flash,Bella,Slugger