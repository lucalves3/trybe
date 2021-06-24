let lucasGame = [7, 14, 19, 23, 33, 49];
let firstNumber;
let arrayFinal = [];
let numerosAcertados = [];
let sum = 0;

    for(index = 1; index <= 6; index++) {
        firstNumber = Math.floor(Math.random() * 60) + 1;
        arrayFinal.push(firstNumber);

        if(lucasGame[index] == arrayFinal[0]){
            numerosAcertados.push(arrayFinal[0]);
        } else if(lucasGame[index] == arrayFinal[1]) {
            numerosAcertados.push(arrayFinal[1]);
        }
        else if(lucasGame[index] == arrayFinal[2]) {
            numerosAcertados.push(arrayFinal[2]);
        }
        else if(lucasGame[index] == arrayFinal[3]) {
            numerosAcertados.push(arrayFinal[3]);
        }
        else if(lucasGame[index] == arrayFinal[4]) {
            numerosAcertados.push(arrayFinal[4]);
        }
        else if(lucasGame[index] == arrayFinal[5]) {
            numerosAcertados.push(arrayFinal[5]);
        }

    }

    

    console.log("numeros escolhidos " + lucasGame);
    console.log("Números sorteados " + arrayFinal);
    console.log("Acertos totais " + numerosAcertados.length);
    console.log('Números que eu acertei -> ' + numerosAcertados)
    