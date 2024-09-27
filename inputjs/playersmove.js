async function Game() {
    numberp1 = await Gameprompt(
      namep1 + ": Press 1 for paper, 2 for rocks, 3 for scissors: ",
      {
        method: "hide",
      }
    );
    numberp2 = await Gameprompt(' and now for ' + namep2 + ': ', {
      method: 'hide'
    });
    associateMoveTwoPlayers(parseInt(numberp1), parseInt(numberp2));
  }

  async function GameVersusbot() {
    numberp1 = await Botgameprompt(
      namep1 + ": Press 1 for paper, 2 for rocks, 3 for scissors: ",
      {
        method: "hide",
      }
    );
    associateMoveOnePlayers(parseInt(numberp1), numberp2);
  }
  
function randomBotmove() {

  const random = crypto.randomInt(1, 4); // Generate a random number between 0 and 2
  return random;
}

