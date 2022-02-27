// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encoder = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };//declare variable to hold encoded/decoded letter/num combination

  function polybius(input, encode = true) {
    let result = "";
    let message = input.toLowerCase();
    if (!encode && input.replace(/\s+/g, "").length % 2 > 0) {
      return false;
    } // Guard clause

    if (encode) {
      let tempWordArr = message.split(" ");
      let encoded = [];
      for (const word of tempWordArr) {
        for (let i = 0; i < word.length; i++) {
          let character = word[i];
          encoded.push(encoder[character]);
        }
        result += `${encoded.join("")} `;
        encoded = [];
      }
      return result.slice(0, -1);
    } // 70-87 Logic for encoding, 
    
    let tempWordArr = message.split(" ");
    let decoded = [];
    for (const word of tempWordArr) {
      for (let i = 0; i < word.length; i += 2) {
        let number = `${word[i]}${word[i + 1]}`;
        decoded.push(decoder[number]);
      }
      result += `${decoded.join("")} `;
      decoded = [];
    } // Decoder
    return result.slice(0, -1);
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
