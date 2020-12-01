// Atribuição e Imutabilidade

const primeiroNome = "Luiz"
const sobrenome = "henrique"

console.log(primeiroNome, sobrenome) // Luiz Henrique
console.log(primeiroNome + " " + sobrenome) // Luiz Henrique
console.log(`meu nome é ${primeiroNome} ${sobrenome}`)

// primeiroNome = "Pedro"
// console.log(primeiroNome) // Error assignment to constant variable

const nomeCompleto = primeiroNome + sobrenome
console.log(nomeCompleto)