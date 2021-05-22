"use script"
// Funções
let func = function (numero) {
    ++numero;
    console.log(numero);
}

// Arrow Functions
let func2 = (numero) => {
    return ++numero;
}

// Arrow Functions
let func3 = numero => ++numero;


let testCalc = func3(5);

console.log(testCalc);

/*
function subtracao(n1, n2, test) {
    let result = n1 - n2;
    test(result);
}
function soma(n1, n2, msn) {
    let result = n1 + n2;
    msn(result);
}
function mensagens(result) {
    console.log("O resultado é: " + result);
}
subtracao(5, 6, mensagens);
soma(5, 6, mensagens);
soma(9, 54, function (result) {
    console.log("O resultado é: " + result);
});
*/
/*
let ask = function (pergunta, sim, nao) {
    let resposta = confirm(pergunta);
    if (resposta) {
        sim();
    }
    else {
        nao();
    }
}
function mostraSim() {
    console.log("Respondeu Sim");
}
function mostraNao() {
    console.log("Respondeu não");
}
ask("Você trabalhou hoje?", mostraSim, mostraNao);
*/

/*
function soma(num1, num2 = 20) {
    let result = num1 + num2;
    return result;
}
console.log(soma(5, 10));
*/

/*
let a = 5;
while (tentativas < 10) {
    switch (a) {
        case 3:
            console.log("Muito pequeno");
            break;
        case 4:
            console.log("Muito grande");
            break;
        case 5:
        case 6:
            console.log("Exato");
            break;
        default:
            console.log("Não sei o valor");
    }
}
*/


// loops
/*
for (let i = 1; i < 5; i++) {
    console.log(i);
}
*/
/*
let tentativas = 0;
//while (true) {
while (tentativas < 3) {
    let senha = prompt("Digite sua senha");

    // if (senha == 123) {
    //     continue;
    // }

    if (senha == 123) {
        break;
    }

    tentativas++;
    console.log(tentativas);
}
*/





// Estrutura de seleção  if else
// Operadores logicos || && !
// || ou
// && e
// ! não
// condição nota > 6 e faltas < 10
/*
let codigo = prompt("Qual codigo do produto");

if (codigo == 1) {
    console.log("Sabão");
}
else if (codigo == 2) {
    console.log("Sabonte");
}
else if (codigo == 3) {
    console.log("Macarrão");
}
else {
    console.log("produto não encontrado");
}
*/

//let nota = prompt("Digite sua nota?");
//let faltas = prompt("Digite a qtde de faltas");

// if (nota > 6 && faltas < 10) {
//     console.log("Aprovado");
//}


/*
let idade = prompt("digite sua idade");
if (idade < 18) {
    console.log("Você é menor de idade");
    if (idade > 12) {
        console.log("Você é adolecente");
    }
    else {
        console.log("Você é Criança");
    }
}
else {
    console.log("Você é Maior de idade");
}
*/



/*
// Operadores de comparação
// > maior
// < menor
// == igual
// != diferente
// >=
// <=
// === igual e é do mesmo tipo
//console.log("1" === 1);
*/

/*
// Incremento e Decremento
let contar = 2;
contar++
//contar = contar + 1;
console.log(contar);
*/

/*
// Operadores atribuição
// += *= /=
let num1 = 10;
let num2 = 2;
num2 += num1;
//num2 = num1 + num2;
//num2 /= num1;
console.log(num2);
*/




/*
// +, /, -, *, % mod, ** exponenciação
//4 / 2 = 2
//4 % 2 = 0
let nome = "Paulo";
let sobreome = "da Silva";
let nomeCompleto = nome + " " + sobreome;
let num1 = 2;
let num2 = 3;
let resultado;
resultado = num1 ** num2;
console.log(resultado);
console.log(nomeCompleto);
*/

/*
let nome = Boolean("ffsdgsdfgs");
console.log(nome);
// String
let var1 = Number("1");
let var2 = String(1);
let var3 = String(true);
//nome = prompt("Qual Seu Nome");
//num1 = prompt("Digite um numero");

// typeof
//console.log(nome);
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(var1);
console.log(var2);
console.log(var3);
*/

/*
let nome;
const color = "#000";
nome = prompt("Qual Seu Nome");
nome = "Paulo";
color = "blue";
//alert("Lindo nome: " + nome);
console.log(nome);
*/




// comentario

/*
    Meu comentário
    de Bloco
*/