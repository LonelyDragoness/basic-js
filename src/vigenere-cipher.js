class VigenereCipheringMachine {
    constructor(direct = true) {
        this.cipherTable = {
            a: "abcdefghijklmnopqrstuvwxyz",
            b: "bcdefghijklmnopqrstuvwxyza",
            c: "cdefghijklmnopqrstuvwxyzab",
            d: "defghijklmnopqrstuvwxyzabc",
            e: "efghijklmnopqrstuvwxyzabcd",
            f: "fghijklmnopqrstuvwxyzabcde",
            g: "ghijklmnopqrstuvwxyzabcdef",
            h: "hijklmnopqrstuvwxyzabcdefg",
            i: "ijklmnopqrstuvwxyzabcdefgh",
            j: "jklmnopqrstuvwxyzabcdefghi",
            k: "klmnopqrstuvwxyzabcdefghij",
            l: "lmnopqrstuvwxyzabcdefghijk",
            m: "mnopqrstuvwxyzabcdefghijkl",
            n: "nopqrstuvwxyzabcdefghijklm",
            o: "opqrstuvwxyzabcdefghijklmn",
            p: "pqrstuvwxyzabcdefghijklmno",
            q: "qrstuvwxyzabcdefghijklmnop",
            r: "rstuvwxyzabcdefghijklmnopq",
            s: "stuvwxyzabcdefghijklmnopqr",
            t: "tuvwxyzabcdefghijklmnopqrs",
            u: "uvwxyzabcdefghijklmnopqrst",
            v: "vwxyzabcdefghijklmnopqrstu",
            w: "wxyzabcdefghijklmnopqrstuv",
            x: "xyzabcdefghijklmnopqrstuvw",
            y: "yzabcdefghijklmnopqrstuvwx",
            z: "zabcdefghijklmnopqrstuvwxy"
    };
        this.direct = direct;
    }

    encrypt(cipherText, key) {
        if(arguments.length !== 2) {throw Error("Not enough arguments.")}
        cipherText = cipherText.toLowerCase();
        key = key.toLowerCase();
        let encrypted = '';
        let counter = 0;

        for (let i = 0; i < cipherText.length; i++) {
            if (this.cipherTable[cipherText[i]]) {
                let testingLetter = (i - counter) % key.length;
                let keywordIndex = this.cipherTable["a"].indexOf(key[testingLetter]);
                encrypted += this.cipherTable[cipherText[i]][keywordIndex];
            } else {
                encrypted += cipherText[i];
                counter += 1;
            }
        }
        if (this.direct === true) {
            return encrypted.toUpperCase();
        } else {
            return [...encrypted].reverse().join('').toUpperCase();
        }

    }

    decrypt(encrypted, key) {
        if(arguments.length !== 2) {throw Error("Not enough arguments.")}
        encrypted = encrypted.toLowerCase();
        key = key.toLowerCase();
        let cipherText = '';
        let counter = 0;

        for (let i = 0; i < encrypted.length; i++) {
            let testingLetter = (i - counter) % key.length;
            let row = this.cipherTable[key[testingLetter]];
            if (row.indexOf(encrypted[i]) !== -1) {
                cipherText += this.cipherTable["a"][row.indexOf(encrypted[i])];
            } else {
                cipherText += encrypted[i];
                counter += 1;
            }
        }
        if (this.direct === true) {
            return cipherText.toUpperCase();
        } else {
            return [...cipherText].reverse().join('').toUpperCase();
        }
    }
}

module.exports = VigenereCipheringMachine;
