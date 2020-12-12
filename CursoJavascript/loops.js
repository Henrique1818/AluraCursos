// Trabalhando com listas

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
let destino = 'Ceára';

console.log('Destinos possiveis');
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let  contador = 0;
let destionoExiste = false;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destionoExiste = true;
        break; // para de execultar o loop
    } else {
        destionoExiste = false;
    };

    contador += 1;
};

console.log('Destino existe: ', destionoExiste);