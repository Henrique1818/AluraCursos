// Trabalhando com listas

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

const idadeComprador = 17;

console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console.log('Comprador maior de 18 anos');
    listaDeDestinos.splice(1,1); // splice(posição, quantidade) a ser apagada
} else {
    console.log('Comprador menor de idade');
};

console.log(listaDeDestinos);
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);


