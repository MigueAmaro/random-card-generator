window.onload = () => {
    let body = document.querySelector("#body");
    body.style.backgroundColor = "green";
    body.style.margin = "0";
    body.style.height = "100vh";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";

    let randomNumber = () => {
        const numbers = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'K', 'J', 'Q'];
        getRandomNumbers = Math.floor(Math.random() * numbers.length);
        return numbers[getRandomNumbers];
    }


    let randomSymbol = () => {
        const symbols = ['♠', '♣', '♥', '♦'];
        getRandomSymbols = Math.floor(Math.random() * symbols.length);
        return symbols[getRandomSymbols];
    }

    var symbolGenerated = randomSymbol();

    let dealer = document.querySelector("#dealer");
    dealer.style.width = "400px";
    dealer.style.height = "600px";
    dealer.style.backgroundColor = "white";
    dealer.style.borderRadius = "20px";
    dealer.style.display = "flex";
    dealer.style.flexDirection = "column";
    dealer.style.justifyContent = "space-between";
    dealer.style.border = "1px solid black";
    if (symbolGenerated == '♥' || symbolGenerated == '♦') {
        dealer.style.color = "red";
    } else {
        dealer.style.color = "black";
    }

    let symbol1 = document.createElement("span");
    symbol1.style.alignSelf = "start";
    symbol1.style.fontSize = "160px";
    symbol1.style.paddingLeft = "20px";
    symbol1.innerText = `${symbolGenerated}`;
    dealer.appendChild(symbol1);

    let number = document.createElement("span");
    number.style.alignItems = "center";
    number.style.fontSize = "180px";
    number.style.alignSelf = "center";
    number.innerText = `${randomNumber()}`;
    dealer.appendChild(number);

    let symbol2 = document.createElement("span");
    symbol2.style.fontSize = "160px";
    symbol2.style.alignSelf = "end";
    symbol2.style.paddingRight = "25px";
    symbol2.style.paddingBottom = "30px";
    symbol2.innerText = `${symbolGenerated}`;
    dealer.appendChild(symbol2);
}

