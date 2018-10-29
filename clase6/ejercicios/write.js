const { Readable, Writable } = require('stream');
// igual que const Readable = require('stream').Readable;

const readStream = Readable({
    read() {
        if (!this.num) {
            this.num = 65;
        }
        const char = String.fromCharCode(this.num);

        this.push(char);

        if (this.num > 90) {
            this.push(null);
        }

        this.num++;
    }
});

const writeStream = Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

readStream.pipe(writeStream);
