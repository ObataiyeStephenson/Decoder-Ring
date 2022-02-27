// Write your tests here!
const { polybius } = require('../src/polybius');
const { expect } = require('chai');

describe("polybius", () => {
    it("should return encoded message when given an appropriate string", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it("Should return false if the number of characters in the given string are false", () => {
        const expected = false;
        const actual = polybius("Bye", encode = false);
        expect(actual).to.equal(expected);
    });

    it("Should return a string of numbers given a string of letters and encode set to false", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", encode = false);
        expect(actual).to.equal(expected);
    });
});