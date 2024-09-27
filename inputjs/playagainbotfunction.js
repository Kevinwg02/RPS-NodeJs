function playAgainwithBot() {
    // const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    rl.question("Shall we play again ? y - n: ", function saveInput(staygo) {
      rl.close();
      if (staygo.toLowerCase() === "y") {
        numberp2 = randomBotmove();
        GameVersusbot();
      } else if (staygo.toLowerCase() === "n") {
        scoreBoard();
        exitForReal();
      }
    });
  }
  
  