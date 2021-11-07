const chalk = require("chalk");
const process = require("process");
const readline = require("readline");
const tty = require("tty");
const Console = require("./Console.js");
const Text = require("./Text.js");
let stdout = process.stdout;
let rows = stdout.rows;
let cols = stdout.columns;
let that;

class Main {
    constructor() {
        that = this;

        let co = new Console();
        this.co = co;

        co.texts = [
        new Text()
            .setText("Hello")
            .setColor(chalk.red)
            .setPosX("center")
            .setPosY("center")
            .setID("test")
        ];

        co.addLoop(this.loop);
        co.startLooping();
    }

    st(txt, clr) {
        this.co.find("test").setText(txt).setColor(clr);
    }

    loop(ms) {
        var st = (txt, clr = chalk.white, ox = 0, oy = 0) => that.co.find("test").setText(txt).setColor(clr).setOffsetX(ox).setOffsetY(oy);

        switch (ms) {
            case 500:
            st("Everyone", chalk.blue);
            break;
            case 1000:
            st("I'm", chalk.yellow);
            break;
            case 1500:
            st("Minco", chalk.white);
            break;
            case 2000:
            st("I", chalk.cyan);
            break;
            case 2500:
            st("Made", chalk.magenta);
            break;
            case 3000:
            st("Program!", chalk.white);
            break;
            case 3500:
            st("You", chalk.cyan);
            break;
            case 4000:
            st("Can", chalk.red);
            break;
            case 4500:
            st("Make", chalk.yellow);
            break;
            case 5000:
            st("It", chalk.magenta);
            break;
            case 5500:
            st("Long", chalk.white);
            break;
            case 5550:
            st("Looong", chalk.white);
            break;
            case 5600:
            st("Looooong", chalk.white);
            break;
            case 5650:
            st("Looooooong", chalk.white);
            break;
            case 5700:
            st("Looooooooong", chalk.white); //
            break;
            case 5750:
            st("Looooooooooong", chalk.white); //
            break;
            case 5800:
            st("Looooooooong", chalk.white); //
            break;
            case 5850:
            st("Looooooong", chalk.white);
            break;
            case 5900:
            st("Looooong", chalk.white);
            break;
            case 5950:
            st("Looong", chalk.white);
            break;
            case 6000:
            st("Long", chalk.white);
            break;
            case 6500:
            st("Text!", chalk.blue);
            break;
            case 7000:
            st("You", chalk.magenta);
            break;
            case 7500:
            st("Can", chalk.cyan);
            break;
            case 8000:
            st("Even Make", chalk.blue);
            break;
            case 8500:
            st("Backgrounded", chalk.bgWhite.black);
            break;
            case 9500:
            st("Texts!", chalk.red);
            break;
            case 10000:
            st("Thanks", chalk.white)
            break;
            case 11000:
            st("Well");
            break;
            case 11500:
            // -x: left, -y: up, x: right, y: down
            st("Need", chalk.white, -3, -3);
            break;
            case 12000:
            st("I", chalk.white, 3, -3);
            break;
            case 12500:
            st("Terminate", chalk.white, 3, 3);
            break;
            case 13000:
            st("This?", chalk.white, -3, 3);
            break;
            case 13500:
            st("Try");
            break;
            case 14000:
            st("It!");
            break;
            case 14500:
            st("Press");
            case 14700:
            st("<Ctrl-C>");
            break;
        }
    }
}

new Main();


/*(function wait() {
    setTimeout(wait, 5000);
})(); // Prevent exitting*/
