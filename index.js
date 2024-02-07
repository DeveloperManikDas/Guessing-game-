const board = document.getElementById("board");
const score = document.getElementById("score");
let points = 0;
let array = [
  { name: "pizza", src: "pizza.png" },
  { name: "burger", src: "burger.png" },
  { name: "pasta", src: "pasta.png" },
  { name: "salad", src: "salad.png" },
  { name: "sushi", src: "sushi.png" },
  { name: "iceCream", src: "ice-cream.png" },
  { name: "pizza", src: "pizza.png" },
  { name: "burger", src: "burger.png" },
  { name: "pasta", src: "pasta.png" },
  { name: "salad", src: "salad.png" },
  { name: "sushi", src: "sushi.png" },
  { name: "iceCream", src: "ice-cream.png" },
];

let chosenItem = [];
let chosenItemId = [];

array.sort(() => Math.random() - 0.5);
const createBoard = () => {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", `images/blank.png`);
    card.setAttribute("id", i);
    card.setAttribute("alt", "food image");
    board.appendChild(card);
    card.addEventListener("click", clickCard);
  }
};
createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("#board img");
  if (chosenItem[0] === chosenItem[1]) {
    cards[chosenItemId[0]].setAttribute("src", "images/white.png");
    cards[chosenItemId[0]].removeEventListener("click", clickCard);

    cards[chosenItemId[1]].setAttribute("src", "images/white.png");
    cards[chosenItemId[1]].removeEventListener("click", clickCard);

    points++;
    score.innerHTML = points!== 6? points: "You Won The Game";
    chosenItem = [];
    chosenItemId = [];
  }else{
    cards[chosenItemId[0]].setAttribute("src", "images/blank.png");
    cards[chosenItemId[1]].setAttribute("src", "images/blank.png");
    chosenItem = [];
    chosenItemId = [];
  }
}

function clickCard() {
  this.setAttribute("src", `images/${array[this.id].src}`);
  chosenItem.push(array[this.id].name);
  chosenItemId.push(this.id);
  if (chosenItem.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
