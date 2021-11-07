const chalk = require("chalk");

class Text {
    constructor() {
        this.text = "";
        this.posx = "left";
        this.posy = "top";
        this.offsetx = 0;
        this.offsety = 0;
        this.id = null;
        this.color = chalk.bgBlack.white;
    }

    static build() {
        return new TextBuilder();
    }

    static find(list, id) {
        return list.filter(f => f.id == id)[0];
    }

    render(stdout) {
        let x, y;
        
        switch (this.posx) {
            case "left":
                x = 0 + this.offsetx;
                break;
            case "center":
                x = Math.floor((stdout.columns - this.text.length) /2) + this.offsetx;
                break;
            case "right":
                x = stdout.columns - this.text.length + this.offsetx;
                break;
            default:
                x = this.posx - this.text.length + this.offsetx;
        }

        switch (this.posy) {
            case "top":
                y = 0 + this.offsety;
                break;
            case "center":
                y = Math.floor((stdout.rows - 1) / 2 ) + this.offsety;
                break;
                
            case "bottom":
                y = stdout.columns +1 + this.offsety;
                break;
            default:
                y = this.posy + this.offsety;
        }

        stdout.cursorTo(x, y);
        stdout.write(this.color(this.text));
    }

    remove(co) {
        co = co.filter(c => c.id != this.id);
    }

    setText(txt) {
        this.text = txt;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setID(id) {
        this.id = id;
        return this;
    }

    setOffsetX(x) {
        this.offsetx = x;
        return this;
    }

    setOffsetY(y) {
        this.offsety = y;
        return this;
    }

    setPosX(x) {
        this.posx = x;
        return this;
    }

    setPosY(y) {
        this.posy = y;
        return this;
    }
}

module.exports = Text;
