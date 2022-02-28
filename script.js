const equivalentLetters = {
  68: "a",
  45: "b",
  74: "c",
  10: "d",
  57: "e",
  27: "f",
  20: "g",
  95: "h",
  47: "i",
  86: "j",
  72: "k",
  64: "l",
  87: "m",
  11: "n",
  69: "o",
  46: "p",
  26: "q",
  53: "r",
  97: "s",
  60: "t",
  32: "u",
  77: "v",
  19: "w",
  21: "x",
  48: "y",
  88: "z",
};

let equivalentMoves = {
  14: " correct",
  38: " correct",
  31: " back1",
  66: " back1",
  51: " back2",
  73: " back2",
  96: " skip1",
  22: " skip1",
  91: " skip2",
  94: " skip2",
  44: " incorrect",
  13: " incorrect",
};

function convertToArray(code) {
  output = code.split(/(\s+)/);

  let storage = [];
  let el1;
  let el2;
  let wordLength;
  for (let i = 0; i < output.length; i++) {
    if (output[i].length > 1) {
      storage.push(output[i]);
    }
  }
  return storage;
}

let arrayForm = convertToArray(
  "386014951457 96323826917214471474 14453869381951531411 142738213169 94871486383222971446 1469145738537377 945738601495 1468316414486688  146914207310"
);

//incorrect
//441013691320
function splitHash(hash) {
  let arr = hash;
  for (const [index, element] of arr.entries()) {
  }
  let container = [];
  for (let i = 0; i < arr.length; i++) {
    let arrayForDecode = arr[i];
    let arLength = arr[i].length;
    let letterCount = arLength / 4;
    let secSlice;
    let letterCodes;
    let deCrypted = "";

    for (let j = 1; j <= letterCount; j++) {
      secSlice = 4 * j;
      firSlice = secSlice - 2;
      letterCodes = arrayForDecode.slice(firSlice, secSlice);

      deCrypted += equivalentLetters[letterCodes];
    }

    container.push(deCrypted);
  }
  return container;
}

let scrambled = splitHash(arrayForm);
//console.log(scrambled);

let movement = getMovement(arrayForm);
//console.log(movement)

function getMovement(hash) {
  let arr = hash;
  for (const [index, element] of arr.entries()) {
  }
  let container = [];
  for (let i = 0; i < arr.length; i++) {
    let arrayForDecode = arr[i];
    let arLength = arr[i].length;
    let letterCount = arLength / 4;
    let secSlice;

    let deCrypted = "";

    for (let j = 1; j <= letterCount; j++) {
      secSlice = 4 * j - 2;
      firSlice = secSlice - 2;
      movementCodes = arrayForDecode.slice(firSlice, secSlice);

      deCrypted += equivalentMoves[movementCodes];
    }

    container.push(deCrypted);
  }
  return container;
}

arrangeLetters(scrambled, movement);

function arrangeLetters(letters, movement) {
  const letterArr = letters;
  const move = movement;

  let splitMove;
  let splitWord;
  let word;
  for (let i = 0; i < movement.length; i++) {
    splitMove = movement[i].split(" ");
    splitMove.shift();

    let newWord;
    let container = "";
    let arrModify2;
    let arrModify3;
    let arrModify4;
    let arrModify6;
    let arrModify7;
    let arrModify9;
    let arrModify10;
    let arrModify11;
    let arrModify12;
    let arrModify13;
    let arrModify16;
    let arrModify17;
    let arrModify19;
    for (let j = 0; j < letterArr[i].length; j++) {
      

      let modify = letterArr[i];
      arrModify = modify.split("");

      if (splitMove[j] === "correct") {
        if(i==0){
          arrModify10 = arrModify.join('')
        }
      }

      if (splitMove[j] === "skip1") {
        removedLetter = arrModify.splice(j, 1);

        arrModify.splice(j + 1, 0, removedLetter[0]);
        arrModify1 = arrModify;
      }

      if (splitMove[j] === "skip2") {
        if (i == 6) {
          arrModify6 = arrModify;
          removedLetter6 = arrModify6.splice(j, 1);
          arrModify6.splice(j + 2, 0, removedLetter6[0]);
          arrModify16 = arrModify6.join('')
         
        }

        if(i==1){
        removedLetter = arrModify1.splice(j, 1);
        arrModify1.splice(j + 2, 0, removedLetter[0]);
        arrModify11 = arrModify1.join('')
      }

      if(i==4){
        arrModify4 = arrModify1.join();
      }
      }

      if (splitMove[j] === "back1") {
        arrModify3 = modify.split("");
        removedLetter = arrModify3.splice(j, 1);

        arrModify3.splice(j - 1, 0, removedLetter[0]);

      if(i==3){
        arrModify13=(arrModify3.join(''))
      }
        if (i == 7 && j == 1) {
          arrModify7 = arrModify3;
          removedLetter7 = arrModify7.splice(3, 1);
          arrModify7.splice(2, 0, removedLetter7[0]);
          arrModify17 = arrModify7.join('')
          
        }
      }

      if (splitMove[j] === "back2") {
        arrModify = modify.split("");
        removedLetter = arrModify.splice(j, 1);

        arrModify.splice(j - 2, 0, removedLetter[0]);
        arrModify2 = arrModify;

        
        arrModify5 = arrModify2.join('');
      
        if(i==2){
          arrModify12=(arrModify2.join(''))  
        }
        

        if (i == 9) {
          arrModify9 = modify.split("");
          removedLetter9 = arrModify9.splice(j, 1);
          arrModify9.splice(j - 2, 0, removedLetter9[0]);
          arrModify19 = arrModify9.join('')
        }
      }

      if (i == 0) {
        document.getElementById("hash0").innerHTML = arrModify10;
      }
      if (i == 1) {
        document.getElementById("hash1").innerHTML = arrModify11;
      }
      if (i == 2) {
      
        document.getElementById("hash2").innerHTML = arrModify12;
      }
      if (i == 3) {
        document.getElementById("hash3").innerHTML = arrModify13;
      }
      if (i == 6) {
        document.getElementById("hash4").innerHTML = arrModify4;
      }
      if (i == 5) {
        document.getElementById("hash5").innerHTML = arrModify5;
      }
      if (i == 6) {
        document.getElementById("hash6").innerHTML = arrModify16;
      }
      if (i == 7) {
        document.getElementById("hash7").innerHTML = arrModify17;
      }
      if (i == 9) {
        document.getElementById("hash8").innerHTML = arrModify19;
      }
    }
  }
}






