let userName = "";
userName ? userName : (userName = "user");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "rock" || userInput.match(/prout/)) {
    return userInput;
  } else {
    console.log("error input");
  }
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  let output;
  switch (number) {
    case 0:
      output = "rock";
      break;
    case 1:
      output = "paper";
      break;
    case 2:
      output = "scissors";
      break;
  }
  return output;
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "TIE";
  }
  if(userChoice.match(/prout/)) {
    return `${userName} blows everything and WIN`
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer WIN";
    } else {
      return `${userName} WIN`;
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return `${userName} WIN`;
    } else {
      return "Computer WIN";
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer WIN";
      } else {
        return `${userName} WIN`;
      }
    }
  }
};

const playGame = () => {
  userName = "Michel";
  const userChoice = getUserChoice("BIG FATTT prout");
  console.log("You threw " + userChoice);
  const computerChoice = getComputerChoice();
  console.log("The computer threw " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();