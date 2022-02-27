const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift > 25 || shift < -25) {
      return false;
    } // Guard clause immediately returning false if the shift is too far out of bounds
    if (!encode) shift *= -1; // Determines weather to shift forward or backward in the alphabet and by how much using the shift parameter
    message = input.toLowerCase(); // To account for any capitalization we put the string to lowercase
    let final = ""; // Our final result will be a string so we create the variable here
    for (let i = 0; i < message.length; i++) {
      let character = message[i];
      if (character.match(/[a-z]/)) {
        let codedMessage = message.charCodeAt(i) + shift;
        if (codedMessage > 122) {
          codedMessage = codedMessage - 26;
        }
        if (codedMessage < 97) {
          codedMessage = codedMessage + 26;
        }
        let adjustedLetter = String.fromCharCode(codedMessage);
        final += adjustedLetter;
      } else {
        final += character;
      }
    } // While iterating through the string we apply the shift while accounting for if the shift ends up putting the index outside of the range of the alphabet/spaces
    return final;
  }
  // Finally we return the iterated string with the appropriate shift applied to each letter
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
