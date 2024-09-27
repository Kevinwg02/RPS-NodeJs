function playAgain() {
    // const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    rl.question("Shall we play again ? y - n", function saveInput(staygo) {
      rl.close();
      if (staygo.toLowerCase() === "y") {
        Game();
      } else if (staygo.toLowerCase() === "n") {
        scoreBoard();
        // scoreboardincluded.scoreboardincluded();
        exitForReal();
      }
    });
  }