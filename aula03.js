console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

console.log("7" / "2");
console.log("Ricardo" / "2"); //Not a Number

console.log(6.5);
console.log(6,5);

console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "André";
const sobrenome = "Melicio";

//console.log(nome + " " + sobrenome)
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador +1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade+1;
console.log(idade);

console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

let new = 2;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);