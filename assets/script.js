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
    
    function (data) {
        
        const symbols = data.symbols;

        const currencies = document.getElementById("currencies");

        let ind = 0;

        for (let code in symbols) {
            let option = document.createElement("option");
            option.value = code;
            option.text = symbols[code];

            currencies.appendChild(option);

            ind++;
        }
    },
    
    function (error) {
        console.log(error);
    }
);

// let symbols;
// let select;
