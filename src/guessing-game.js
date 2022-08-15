class GuessingGame {
    array = [];
    number;
    setRange(min, max) {
        for (let i = min + 1; i < max; i++) {
            this.array.push(i);
        }
        this.number = Math.ceil((this.array.length - 1) / 2);
    }
    guess() {
        return this.array[this.number];
    }
    lower() {
        this.array = this.array.slice(0, this.number);
        this.number = Math.floor(this.array.length / 2);
    }
    greater() {
        this.array = this.array.slice(this.number + 1);
        this.number = Math.floor(this.array.length / 2);
    }
}

module.exports = GuessingGame;
