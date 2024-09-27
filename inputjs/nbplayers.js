
function numberofPlayers() {

    const rl0 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl0.question(
      "Are you playing alone (1) or with a friend (2)?",
      function saveInput(nbplayers) {
        nbplayers = parseInt(nbplayers);
        rl0.close();
  
        //decide if we play alone or against a someone
        if (nbplayers === 1) {
          lunchBotgame();
        } else if (nbplayers === 2) {
          lunchTwoplayergame();
        }
        return nbplayers;
      }
    );
  }
  