window.onload = () => {
    let body = document.querySelector("#body");
    body.style.backgroundColor = "green"

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
    dealer.style.width = "350px";
    dealer.style.height = "500px";
    dealer.style.backgroundColor = "white";
    dealer.style.margin = "3rem 30%";
    dealer.style.borderRadius = "20px";
    dealer.style.display = "flex";
    dealer.style.justifyContent = "space-between";
    dealer.style.position = "absolute";
    dealer.style.border = "1px solid black";
    if (symbolGenerated == '♥' || symbolGenerated == '♦') {
        dealer.style.color = "red";
      } else {
        dealer.style.color = "black";
      }

    let symbol1 = document.createElement("symbol1");
    symbol1.style.alignSelf = "start";
    symbol1.style.fontSize = "160px";
    symbol1.style.paddingLeft = "20px";
    symbol1.innerText = `${symbolGenerated}`;
    dealer.appendChild(symbol1);

    let number = document.createElement("number");
    number.style.alignItems = "center";
    number.style.fontSize = "200px";
    number.style.alignSelf = "center";
    number.innerText = `${randomNumber()}`;
    dealer.appendChild(number);

    let symbol2 = document.createElement("symbol2");
    symbol2.style.fontSize = "160px";
    symbol2.style.alignSelf = "end";
    symbol2.style.paddingRight = "25px";
    symbol2.innerText = `${symbolGenerated}`;
    dealer.appendChild(symbol2);
}

