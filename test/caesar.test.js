// Write your tests here!
const { caesar } = require('../src/caesar');
const { expect } = require('chai');

describe("caesar", () => {
    it("should return 'false' if the shift value isn't present", () => {
        const expected = false;
        const actual = caesar("testing no shift value");
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if the shift value is less than '-25'", () => {
        const expected = false;
        const actual = caesar("testing less than -25 shift value", -33);
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if the shift value is greater than '25'", () => {
        const expected = false;
        const actual = caesar("testing greater than 25 shift value", 33);
        expect(actual).to.equal(expected);
    });

    it("should keep spaces and symbols", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        console.log(actual);
        expect(actual).to.equal(expected);
    });

    it("should decode if the third parameter of 'false' is passed in", ()=>{
        const expected = 'thinkful';
        const actual = caesar("wklqnixo", 3, false);
        console.log(actual);
        expect(actual).to.equal(expected);
    });

    it("should wrap around to the front of the alphabet if a letter is shifted so that it goes 'off' the alphabet when applying a negative shift", ()=>{
        const expected = 'z';
        const actual = caesar('a', -1);
        expect(actual).to.equal(expected);
    })

    it("should wrap around to the front of the alphabet if a letter is shifted so that it goes 'off' the alphabet when applying a positive shift", ()=>{
        const expected = 'a';
        const actual = caesar('z', 1);
        expect(actual).to.equal(expected);
    })
});