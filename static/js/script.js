// alert("Hi");

// console.log("Hello");

// 1
function ageInDays() {
  var birthYear = prompt("Birth year?");
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + ageInDayss + " days");
  h1.setAttribute("id", "ageInDayss");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

reset = () => document.getElementById("ageInDayss").remove();

// 2
generateCat = () => {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "https://i.pinimg.com/474x/dc/60/24/dc6024fde9de25378123de99d6affc67.jpg";
  div.appendChild(image);
};

//3

function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  results = decideWinner(humanChoice, botChoice);
  message = finalMessage(results);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: {
      scissors: 1,
      rock: 0.5,
      paper: 0,
    },
    paper: {
      rock: 1,
      paper: 0.5,
      scissors: 0,
    },
    scissors: {
      paper: 1,
      scissors: 0.5,
      rock: 0,
    },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You Won", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' src='" +
    imageDatabase[humanImageChoice] +
    "' >";
  botDiv.innerHTML =
    "<img height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1); 'src='" +
    imageDatabase[botImageChoice] +
    "' >";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

// 4
var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonRed();
  } else if (buttonThingy.value === "green") {
    buttonGreen();
  } else if (buttonThingy.value === "reset") {
    buttonReset();
  } else if (buttonThingy.value === "random") {
    randomColors();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  var choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

// 5
let blackjackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsMaps: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    Q: 10,
    J: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lossSound = new Audio("static/sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let cards = randomCard();
    showCard(cards, YOU);
    updateScore(cards, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function showCard(cards, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/images/${cards}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  } else {
  }
}

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;

    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");
    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }
    for (let i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;
    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#your-blackjack-result").style.color = "white";
    document.querySelector("#dealer-blackjack-result").style.color = "white";

    document.querySelector("#blackjack-result").textContent = "Let's play";
    document.querySelector("#blackjack-result").style.color = "black";

    blackjackGame["turnsOver"] = true;
  }
}

function updateScore(cards, activePlayer) {
  if (cards === "A") {
    // If adding 11 keeps me below 21, add 11. Otherwise, add 1
    if (activePlayer["score"] + blackjackGame["cardsMaps"][cards][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMaps"][cards][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMaps"][cards][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMaps"][cards];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "Bust !";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
    let cards = randomCard();
    showCard(cards, DEALER);
    updateScore(cards, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame["turnsOver"] = true;
  let winner = computeWinner();
  showResult(winner);
}

// compute winner and return who just won
// update the wins, draws, and losses
function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    // condition: higher score than dealer or when dealer busts you'er 21 or under
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["SCORE"]) {
      blackjackGame["draws"]++;
    }
    // conditon: when user busts but dealer doesn't
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  console.log(blackjackGame);
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "YOU WON";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      message = "YOU LOST";
      messageColor = "red";
      lossSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];

      message = "YOU DREW";
      messageColor = "black";
    }
    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}
