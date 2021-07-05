let listaIngredientes = [
    '500g de feijão pré cozido',
    '300g de agua',
    '3kg de sal',
    '25kg de plutônio',
    '134t de Urânio Enriquecido',
    '2 colheres de açúcar'
]
let ingredientList = document.querySelector(".ingredients-lists");

for(let index = 0; index < listaIngredientes.length; index += 1) {
    let ingredient = listaIngredientes[index];

    let ingredientlistItem = document.createElement('li');
    ingredientlistItem.innerText = ingredient;

    ingredientList.appendChild(ingredientlistItem);

}