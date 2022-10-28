console.log("Hello World!\n==========\n");

// Exercise 1 Section
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    arr.forEach((number) => {
        sum += number;
    });

    return sum; 
}

console.log(arraySum(numbers));

// exercise 2

const book = {
    title: "",
    author: "",
    numPages: null,
    isRead: false
}

book.title = "The outsiders"
book.numPages = 485;
book.readCount = 1;

book.info = function (){
    return `${this.title}, ${this.numPages} pages, read ${this.readCount} times`; 
}

console.log(book.info());


const myWord = "something";

const charArr = myWord.split('');

console.log(charArr);

let reversedWord = "";

for(let i = charArr.length - 1; i >= 0; i--){
    console.log(charArr[i], i);
    reversedWord.push(charArr[i]);
}

console.log(reversedWord)

// exercise 3

for (let letter of reversedWord) {
    myReversedString += letter;
}

console.log(myReversedString)

let myReversedString = "";
for (let i = myWord.length - 1; i >= 0; i--){
    myReversedString += myWord[i];
}

console.log(myReversedString);


let sentence = "The quick brown fox jumps over the lazy dog";

let splitUpWords = sentence.split(" ");

console.log(splitUpWords);

for (let word of splitUpWords){
    let myReversedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        myReversedWord += word[i];
    }

    result += (myReversedWord + " ");
    console.log(myReversedWord);
}

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataSplit = csvData.split("\n");
const headers = dataSplit[0].split(",");
console.log(headers);
const resultObjects = [];

for (let i = 1; 1 < dataSplit.length; i++){
    const values = dataSplit[i].split(",");
    let obj = {};
    obj.name = values[0];
    obj.age = value[1];
    console.log("Object:", obj);
    resultObjects.push(obj);
}

console.log(resultObjects);



