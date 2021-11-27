async function symbolsPlease() {
    const response = await fetch(
        "http://api.exchangeratesapi.io/v1/symbols?access_key=2c18d2c018a0ce911992d26a11ef5af3"
    );

    return await response.json();
}

async function ratesPlease() {
    const response = await fetch(
        "http://api.exchangeratesapi.io/v1/latest?access_key=2c18d2c018a0ce911992d26a11ef5af3"
    );

    return await response.json();
}

symbolsPlease().then(
    function(data) {
        symbols = data.symbols;
    },
    function(error) {
        console.log(error);
    }
);

let symbols;

// for (let i = 0; i < symbols.length; i++) {
//     console.log(symbols[i]);
// }
    