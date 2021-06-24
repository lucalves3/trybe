let lucasGame = [7, 14, 19, 23, 33, 49];
let firstNumber;
let arrayFinal = [];
let numerosAcertados = [];
let sum = 0;

    for(index = 1; index <= 6; index++) {
        firstNumber = Math.floor(Math.random() * 60) + 1;
        arrayFinal.push(firstNumber);
    }

    for(index = 0; index <= 5; index++) {
        let drawNumber = arrayFinal[index];

        for(let gameIndex = 0; gameIndex < lucasGame.length; gameIndex += 1) {
            let gameNumber = lucasGame[gameIndex];

            if(drawNumber === gameIndex) {
                numerosAcertados.push(sum + 1);
            }
        }
    }

    console.log("numeros escolhidos " + lucasGame);
    console.log("Números sorteados " + arrayFinal);
    console.log("Acertos totais " + numerosAcertados.length);
    console.log('Números que eu acertei -> ' + numerosAcertados)
    