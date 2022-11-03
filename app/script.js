console.log("olaaa");

// Extra 12 - done in html file

// Extra 13 - Create a method that counts the number of “travels” on the page
const allTravels = document.querySelectorAll(".card-image");
const totalTravels = document.getElementById("totalTravels");
totalTravels.innerText = `${allTravels.length}`;

// Extra 16 - Delete all cards [why is allCards of length 16?]
const allCards = document.querySelectorAll(".card");
const deleteBtn = document.getElementById("deleteBtn");
const removeAllCards = function () {
  for (let card of allCards) {
    card.remove();
  }
};
deleteBtn.addEventListener("click", removeAllCards);

const seeTravels = function () {
  totalTravels.innerText = `${allCards.length}`;
};
seeTravels();

// Etra 17 - hot badge to summer items
const summerElements = document.querySelectorAll("#summer .card");

const hot = function () {
  for (let sum of summerElements) {
    const hotBadge = document.createElement("span");
    hotBadge.classList.add("badge");
    hotBadge.classList.add("badge-warning");
    hotBadge.classList.add("badgeStyling");
    hotBadge.innerText = "Hot";
    sum.appendChild(hotBadge);
  }
};
hot();
