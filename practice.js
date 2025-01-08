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

const analyze = (array) => {
 return  {
    average: array.reduce((a,b) => a + b, 0) / array.length,
    min: array.sort()[0],
    max: array[array.length - 1],
    length: array.length
}
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCypher,
  analyze
};

