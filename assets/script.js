const apiKey="03173eb866cc2df4df13";

async function symbolsPlease() {
    const response = await fetch(
        "https://free.currconv.com/api/v7/currencies?apiKey="+apiKey
    );

    return await response.json();
}

async function ratesPlease() {
    const response = await fetch(
        "https://free.currconv.com/api/v7/apiKey="+apiKey
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

ratesPlease().then((data) => {console.log(data)}, (error) => {console.log(error)});
// let symbols;
// let select;
