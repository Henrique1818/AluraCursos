// Trabalhando com listas

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true

console.log('Destinos possiveis');
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log('Comprador maior de 18 anos');
//     listaDeDestinos.splice(1,1); // splice(posição, quantidade) a ser apagada
// } 
// else if(estaAcompanhada == true) {
//     console.log('Comprador está acompanhado');
//     listaDeDestinos.splice(1,1);
// } else {
//     console.log('Comprador menor de idade');
// };

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Passagem Comprada com sucesso!');
    listaDeDestinos.splice(2,1); // splice(posição, quantidade) a ser apagada
} 
else {
    console.log('Comprador menor de idade');
};


console.log('Embarque: \n\n');
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa Viagem!!');
} else {
    console.log('Você não pode embarcar');
};

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
