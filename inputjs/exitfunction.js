function exitForReal() {
    // const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Press ENTRER to exit", function saveInput(staygo) {
      rl.close();
    });
  }