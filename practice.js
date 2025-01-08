const capitalize = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  const arr = string.split("");
  return arr.reverse().join("");
};

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a,b){
    return a * b
  },

  divide(a,b){
    return a / b
  }

};

const caesarCypher = (string, key) => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const arr = upper.split("")
    const arr2 = lower.split("")
    let test = string.split("")

    for (let char = 0; char < test.length; char ++){
        if (upper.includes(test[char])) {
            test[char] = upper[(upper.indexOf(test[char]) + key) % upper.length]
        }
        else if(lower.includes(test[char])) {
            test[char] = lower[(lower.indexOf(test[char]) + key) % upper.length]
        }
    };
    return test.join("")
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCypher,
};
