// Trabalhando com listas

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
let destino = 'Salvador';

console.log('Destinos possiveis');
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let  contador = 0;

while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        console.log('Destino existe');
    } else {
        console.log('Destino não existe');
    };

    contador += 1;
};
