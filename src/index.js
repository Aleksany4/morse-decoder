const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' ',
};

function decode(expr) {
  let arr = [], b = 0, x = 0;
    for (let i = 0; i < expr.length; i += 2) {
        arr[x] = expr.slice(b, b += 2); {
            x++
        };
    };
      let arrObj = [];
    for (j = 0; j < arr.length; j++) {
    if (arr[j].includes("11")) {
      arrObj.push('-')
    } else if (arr[j].includes("10")) {
      arrObj.push('.')
    } else if (arr[j].includes('**')) {
      arrObj.push(' ')
    } else if (arr[j].includes("00")) {
      arrObj.push('')
    }
    }
  let subArr = [], size = 5;
  for (let i = 0; i < arrObj.length/size; i++){
    subArr[i] = arrObj.slice((i*size), (i*size) + size).join('');
    }
  let goal = '';
  for (let t = 0; t < subArr.length; t++) {
    goal = goal + MORSE_TABLE[subArr[t]]
    console.log(MORSE_TABLE[subArr[t]])
  }
  return goal;
};

module.exports = {
    decode
}