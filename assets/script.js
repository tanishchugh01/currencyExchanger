const apiKey="03173eb866cc2df4df13";

async function symbolsPlease() {
    const response = await fetch(
        "https://free.currconv.com/api/v7/currencies?apiKey=03173eb866cc2df4df13"
    , {mode: 'no-cors'}
        
);
    return await response.json();
}

async function ratesPlease() {
    const response = await fetch(
        "https://free.currconv.com/api/v7/currencies?apiKey="+apiKey
        , {mode: 'no-cors'}
    );

    console.log(response);
    const data = await response.json();
    console.log(data);
    return await response.json();
}

// symbolsPlease().then(
    
//     function (data) {
        
//         const symbols = data.symbols;

//         const currencies = document.getElementById("currencies");

//         let ind = 0;

//         for (let code in symbols) {
//             let option = document.createElement("option");
//             option.value = code;
//             option.text = symbols[code];

//             currencies.appendChild(option);

//             ind++;
//         }
//     },
    
//     function (error) {
//         console.log(error);
//     }
// );

ratesPlease().then((data) => {console.log(data)}, (error) => {console.log(error)});