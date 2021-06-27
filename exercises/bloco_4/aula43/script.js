let n = 5;
let linha = [];
let coluna = [];
let box = [];

    // Esse vai fazer uma piramide começando com 1 até n
    for(index = 0; index < n; index += 1) {
    // Aqui fez as n linhas porém com um *
        linha = " ";
    // Aqui preciso fazer com que cada linha contenha n *
        for(i = 0; i < n; i += 1) {
            linha = linha + "*"
        }
        console.log(linha);
    }
        
    // fazer um quadrado com n linhas e n colunas

