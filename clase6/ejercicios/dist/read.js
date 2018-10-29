const { Readable, Writable } = require('stream');
// igual que const Readable = require('stream').Readable;

const readStream = Readable({
    read() {
        if (!this.num) {
            this.num = 65;
        }
        const char = String.fromCharCode(this.num);

        this.push(char);

        if (this.num >= 90) {
            this.push(null); // para avisar que termina
        }

        this.num++;
    }
});

readStream.pipe(process.stdout);
