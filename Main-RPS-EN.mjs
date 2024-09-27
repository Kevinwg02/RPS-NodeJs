import chalk from 'chalk';
import Botgameprompt from "password-prompt";
import Gameprompt from "password-prompt";
import readline from "readline";
import crypto from "crypto";

// the require got remplaced by the import

// const crypto = require('crypto');
// const readline = require("readline");
// const Gameprompt = require("password-prompt");
// const Botgameprompt = require("password-prompt");

const log = console.log;
chalk.level = 1;



var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var namep2 = "Jerry";
var staygo;
var scorep1 = 0;
var scorep2 = 0;
var random;
var nbplayers;



import includeduselessstars from './js/uselessstars.js';
import includedscoreboard from './js/nicescoreboard.js';
import includedgamerules from './js/gamerules.js';


import includedexitfunction from './inputjs/exitfunction.js';
import includednbplayers from './inputjs/nbplayers.js';
import includedplaywithbot from './inputjs/playagainbotfunction.js';
import includedplayagain from './inputjs/playagainfunction.js';
import includedplayermove from './inputjs/playersmove.js';




function welcomeMSG() {
  includeuselessstars
  log(chalk.cyanBright("                       Welcome to rock, paper, scissors                    "));
  includeuselessstars
}




function launchTwoplayergame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Player 1, Write your name :  ", function saveInput(name1) {
    rl.question("and now player 2: ", function saveInput(name2) {
      rl.close();
      namep1 = name1;
      namep2 = name2;

      uselessStars();
      log(chalk.cyan("                                Good Luck                                  "));
      uselessStars();
      Game();
    });
  });
}


function launchBotgame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Player 1, Write your name  ", function saveInput(name1) {
    rl.close();
    namep1 = name1;
    numberp2 = randomBotmove();
    uselessStars();
    log(chalk.cyan("                                Good Luck                                  "));
    uselessStars();
    GameVersusbot();
  });
}


includerpsmsg.rpsmsg();

welcomeMSG();

