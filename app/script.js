console.log("olaaa");

// Extra 12 - done in html file

// Extra 13 - Create a method that counts the number of “travels” on the page
const allTravels = document.querySelectorAll(".card-image");
const totalTravels = document.getElementById("totalTravels");
totalTravels.innerText = `${allTravels.length}`;
