// Trabalhando com listas

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

listaDeDestinos.push(`Ceará`) // Adicionar um iten a lista

console.log('Destinos possíveis');
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // splice(posição, quantidade) a ser apagada
console.log(listaDeDestinos);
console.log(listaDeDestinos[2], listaDeDestinos[1]);