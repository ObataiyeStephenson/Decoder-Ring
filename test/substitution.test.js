const { expect } = require("chai");
const { substitution } = require("../src/substitution");

// Write your tests here!
describe("substitution tests", () => {
  describe("error handling in inputs", () => {
    it("should return false if no alphabet", () => {
      const actual = substitution("thinkful");
      expect(actual).to.be.false;
    });
    it("should return false if alphabet is not exactly 26 characters", () => {
      let alphabet = "short";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if alphabet does not contain unique characters", () => {
      let alphabet = "abcabcabcabcabcabcabcabcyz";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("encoding input", () => {
    it("should encode a string with new alphabet", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("jrufscpw");
    });
    it("should work with with unique characters", () => {
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let input = "message";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("y&ii$r&");
    });
    it("should keep spaces", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "You are an excellent spy";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });
    it("should ignore capital letters", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "ThiNkFul";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("jrufscpw");
    });
  });
  describe("should decode input", () => {
    it("should decode a string with new alphabet", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "jrufscpw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should work with with unique characters", () => {
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let input = "y&ii$r&";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("message");
    });
    it("should keep spaces", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "elp xhm xf mbymwwmfj dne";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("you are an excellent spy");
    });
    it("should ignore capital letters", () => {
      const actual = substitution(
        "jRUfscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
  });
});
