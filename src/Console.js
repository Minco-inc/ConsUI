const process = require("process");
const Text = require("./Text.js");
let stdout = process.stdout;

let that;
let deltaTimeMs = 0;

class Console {
    constructor() {
        this.loops = [];

        this.texts = [];
        that = this;

        process.on('SIGINT', () => {
            console.clear();
            process.exit();
        });
        
        this.startLooping();
    }

    startLooping() {
        setInterval(this.loopMs, 0.6);
        setInterval(() => this.render(stdout), 50);
    }

    addLoop(fx) {
        this.loops.push(fx);
    }

    loopMs() {
        deltaTimeMs++;
        that.loops.forEach(loop => loop(deltaTimeMs));
    }

    find(id) {
        return Text.find(this.texts, id);
    }

    render(stdout) {
        console.clear();
        that.texts.forEach(text => {
                text.render(stdout);
        });
    }
}

module.exports = Console;
