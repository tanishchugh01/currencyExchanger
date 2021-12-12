// const apiKey = "03173eb866cc2df4df13";

async function symbolsPlease() {
    const response = await fetch(
        "https://free.currconv.com/api/v7/currencies?apiKey=" + apiKey
    );
    return await response.json();
}

async function ratesPlease(from, to) {
    const response = await fetch(
        `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${apiKey}`
    );

    return await response.json();
}

symbolsPlease().then(
    function (data) {
        const symbols = data.results;

        const currencies = document.getElementById("currencies");

        // let ind = 0;

        for (let ind in symbols) {
            let option = document.createElement("option");

            option.value = symbols[ind].id;
            option.text = symbols[ind].currencyName;

            currencies.appendChild(option);
        }
        
        console.log("Added elements");
    },

    function (error) {
        console.log(error);
    }
);

// let symbols = {};
// ratesPlease("USD","INR").then((data) => console.log(data), (error) => {console.log(error)});
// symbolsPlease().then((data) => {console.log(data);symbols=data}, (error) => {console.log(error)});

function submit() {
    const amount = document.getElementById("amount").value;

    const from = document.getElementById("fromCurrency").value;

    const to = document.getElementById("toCurrency").value;

    convert(amount, from, to);

    return false;
}

function convert(amount, from, to) {
    ratesPlease(from, to).then(
        (data) => {
            document.getElementById("answer").innerHTML =
                data[`${from}_${to}`] * amount;
        },
        () => {
            document.getElementById("answer").innerHTML = ": )";
        }
    );
}

function swapSymbols()
{
    let to = document.getElementById("fromCurrency");
    let from = document.getElementById("toCurrency");
    
    //swap
    let temp = to.value;
    to.value=from.value;
    from.value=temp;
}

// print meaning of life
// console.log(42);
