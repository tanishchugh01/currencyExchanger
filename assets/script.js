async function symbolsPlease() {
    const response = await fetch('http://api.exchangeratesapi.io/v1/symbols?access_key=2c18d2c018a0ce911992d26a11ef5af3');
    mySymbols = await response.json();
    
    console.log(mySymbols);
}

async function dataPlease() {
    const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=2c18d2c018a0ce911992d26a11ef5af3');
    myData = await response.json();
    
    console.log(myData);
}

symbolsPlease();
dataPlease();

let myData;
let mySymbols;

// console.log(myData);
// console.log(mySymbols);