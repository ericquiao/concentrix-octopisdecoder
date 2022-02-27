const equivalentLetters={
  68:"a",
  45:"b",
  74:"c",
  10:"d",
  57:"e",
  27:"f",
  20:"g",
  95:"h",
  47:"i",
  86:"j",
  72:"k",
  64:"l",
  87:"m",
  11:"n",
  69:"o",
  46:"p",
  26:"q",
  53:"r",
  97:"s",
  60:"t",
  32:"u",
  77:"v",
  19:"w",
  21:"x",
  48:"y",
  88:"z"
}

let movements =[
  {
    "correct" : "39" || "14"
  },
  {
    "back1" : "31" || "66"
  },
  {
    "back2" : "51" || "73"
  },
  {
    "skip1" : "96" || "22"
  },
  {
    "skip2" : "91" || "94"
  },
]


function convertToArray(code){

  output= code.split(/(\s+)/);

let storage=[]
let el1;
let el2;
let wordLength;
 for(let i=0; i<output.length; i++){
   
 
    if(output[i].length>1){
      storage.push(output[i])
    }   
 }
 return storage
}

 
let arrayForm = (convertToArray("386014951457 96323826917214471474 14453869381951531411 142738213169 94871486383222971446 1469145738537377 945738601495 1468316414486688 441013691320 146914207310"))

console.log(arrayForm)



function splitHash(hash){

  let arr = hash;
  for (const [index, element] of arr.entries()) { 
    console.log(index, element); 
} 
let container=[];
for(let i=0; i<arr.length; i++){
    let arrayForDecode = arr[i]
    let arLength = arr[i].length
    let letterCount = arLength/4
    let secSlice;
    let letterCodes;
    let deCrypted="";
    
   
    for (let j=1; j<=letterCount; j++){
      
      secSlice = (4*j)
      firSlice = secSlice - 2
      letterCodes = (arrayForDecode.slice(firSlice,secSlice))

 
      deCrypted +=(equivalentLetters[letterCodes])  

    }
    
    container.push(deCrypted)
    
  }
  return(container)
}

let scrambled=(splitHash(arrayForm))

console.log(scrambled)


function arrangeLetters(letters,movement){

}