// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    const abc = "abcdefghijklmnopqrstuvwxyz".split("");
    const message = input.toLowerCase();
    let result = "";

    // Check if an alphabet is being passed in or if it is exactly 26 characters
    if (!alphabet || alphabet.length !== 26) return false;

    // Check if 'alphabet' has any repeated character
    let anyDuplicates = new Set(alphabet);
    if ([...anyDuplicates].length !== 26) return false;

    if (encode) {
      for (const currChar of message) {
        let currCharIndex = abc.indexOf(currChar);

        // Check if the current value is a letter, then code/decode
        if (currChar.match(/[a-z]/)) {
          result += alphabet[currCharIndex];

          // Else just add the current character to the resulting string without any changes
        } else {
          result += currChar;
        }
      }
      return result;
    } // Encoder logic

    for (const currChar of message) {
      let currCharIndex = alphabet.indexOf(currChar);
      // Check if the current value is a letter, then code/decode
      if (!currChar.match(/\s+/g)) {
        result += abc[currCharIndex];
        // Else add the current character to the resulting string without any changes
      } else {
        result += currChar;
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
