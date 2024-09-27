function gameRulesTwoPlayers(player1, player2) {
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      console.log("                          Congrats " + namep1 + "! You've won   ");
      scorep1 += 1;
      playAgain();
    } else if (
      (player2 === "rock" && player1 === "scissors") ||
      (player2 === "paper" && player1 === "rock") ||
      (player2 === "scissors" && player1 === "paper")
    ) {
      console.log(
        "                        Congrats " +
        namep2 +
        "! You've won                        "
      );
      scorep2 += 1;
      playAgain();
    } else if (
      (player1 === "rock" && player2 === "rock") ||
      (player1 === "paper" && player2 === "paper") ||
      (player1 === "scissors" && player2 === "scissors")
    ) {
      console.log("Tie");
      playAgain();
    }
  }
  
  function associateMoveTwoPlayers(numberp1, numberp2) {
    switch (numberp1) {
      case 1:
        player1 = "paper";
        break;
      case 2:
        player1 = "rock";
        break;
      case 3:
        player1 = "scissors";
        break;
      default:
        console.log(player1 + " typo ");
        return;
    }
    switch (numberp2) {
      case 1:
        player2 = "paper";
        break;
      case 2:
        player2 = "rock";
        break;
      case 3:
        player2 = "scissors";
        break;
      default:
        console.log(player2 + " typo ");
        return;
    }
    console.log(player1 + " vs " + player2);
  
    gameRulesTwoPlayers(player1, player2);
  }

  function gameRulesOnePlayer(player1, player2) {
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      console.log("  Congrats " + namep1 + "! You've won   ");
      scorep1 += 1;
      playAgainwithBot();
    } else if (
      (player2 === "rock" && player1 === "scissors") ||
      (player2 === "paper" && player1 === "rock") ||
      (player2 === "scissors" && player1 === "paper")
    ) {
      console.log(
        "                        Congrats " +
        namep2 +
        "! You've won                        "
      );
      scorep2 += 1;
      playAgainwithBot();
    } else if (
      (player1 === "rock" && player2 === "rock") ||
      (player1 === "paper" && player2 === "paper") ||
      (player1 === "scissors" && player2 === "scissors")
    ) {
      console.log("Tie");
      playAgainwithBot();
    }
  }
  
function associateMoveOnePlayers(numberp1, numberp2) {

  switch (numberp1) {
    case 1:
      player1 = "paper";
      break;
    case 2:
      player1 = "rock";
      break;
    case 3:
      player1 = "scissors";
      break;
    default:
      console.log(player1 + " typo ");
  }
  switch (numberp2) {
    case 1:
      player2 = "paper";
      break;
    case 2:
      player2 = "rock";
      break;
    case 3:
      player2 = "scissors";
      break;
    default:
      console.log(player2 + " typo ");
  }
  console.log(player1 + " vs " + player2);
  gameRulesOnePlayer(player1, player2);
}
