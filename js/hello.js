"use script"


let form = document.getElementById("form");
let btnSend = document.getElementById("enviar");


btnSend.addEventListener("click", () => {
    let validador = new Validador(form);
    let result = validador.validar();

    if (result === true) {
        form.submit();
    } else {
        let aviso = document.querySelector(".avisos");
        aviso.innerHTML = "Ops! os campos \r " +
            "(" + result.join(", ")
            + ") são obrigatórios.";
        //aviso.classList.add("error");
        //form.nome.classList.add("error");
    }
});



/*
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

let form = document.getElementById("form");
let btnSend = document.getElementById("enviar");

btnSend.addEventListener("click", () => {
    let nome = form.nome.value;
    let senha = form.senha.value;
    let cpf = form.cpf.value;

    if (!TestaCPF(cpf)) {
        alert("Ops! O campo nome e senha são obrigatórios");
    }

    if (nome == "" || senha == "" || senha.length > 10) {
        alert("Ops! O campo nome e senha são obrigatórios");
    }
    else {
        form.submit();
    }

});
*/

//console.log(nome);



/*
let content = document.getElementById("content");
let addContent = "Este é o " + content.innerHTML;
content.innerHTML = addContent;

content.addEventListener("click", () => {
    content.classList.toggle("error");
    //content.style.display = "none";
});



let lis = document.querySelectorAll("body .li");

for (let i = 0; i < lis.length; i++) {
    let link = document.querySelectorAll("body .li")[i].firstElementChild;
    link.style.color = "#fff";
    let cores = ["#ff0000", "#0000ff", "#000"];
    link.addEventListener("click", () => {
        document.body.style.backgroundColor = cores[i];
    });
}
//console.log(lis[0]);
let btn = document.getElementById("btn");
let link = document.getElementById("link-color");

btn.onclick = function () {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
}

btn.onmouseover = function () {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "#fff";
    link.style.color = "#fff";
}
*/

/*
// Array
let frutas = [
    "Maça",
    true,
    "Pera",
    12,
    { nome: "Amelia" }
];
let precos = [["maça", ["PR", 2]], "pera"];
console.log(precos[0][0]);
*/
//console.log(frutas.length);
//console.log(frutas[1] + frutas[0]);

// for (let i = 0; i < frutas.length; i++) {

//     if (i == 2 || i == 3) {
//         console.log(frutas[i]);
//     }
// }

/*
let Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudacao = () => {
        //alert("Olá " + this.nome);
        //console.log(this.nome);
        return this.nome;
    }
}

let User = function (login, senha) {
    this.login = login;
    this.senha = senha;
    this.validate = () => {
        let test = this.senha > 10 ? false : true;
        return test;
    }
}
User.prototype = new Pessoa("Pedro", 50);
let user1 = new User("celso", "123456");
let test = user1.saudacao();
alert(test);
*/



/*
let nome = "Pablo Vitar de souza";
console.log(nome.length);
console.log(nome.indexOf("@"));
*/

/*
let animal = {
    comer: false,
    correr: () => {
        return true;
    }
}

let coelho = {
    pula: true,
    __proto__: animal
}

let cachorro = {
    late: true,
    __proto__: animal
}
//cachorro.__proto__ = animal;
console.log(cachorro)
*/


/*
let User = function (nome) {
    this.nome = nome;
    this.isAdmin = false;
}
let user1 = new User("Paula");
let user2 = new User("Paula");
console.log(user2.nome)
*/



/*
let user = {};
user.nome = "Jonas";
user.idade = 42;
*/

/*
let user = {
    nome: "Amanda",
    idade: 20,
    email: "test@gmail.com",
    login: {
        acount: "pedro",
        senha: 123
    },
    mensagem: function (msn) {
        //return msn + " " + this.nome;
        return {
            mensagem: msn,
            nome: this.nome
        }
    },
    isAdmin: true
}
user.endereco = "Rua Amador Carneiro, 253";
let dados = user.mensagem("Oi");
console.log(dados.nome);
*/



/*
for (let i = 0; i < 5; i++) {
    console.log("Valor = " + i);
}
*/

/*
let debug = function (mensagem) {
    let msg = "Olá " + mensagem;
    //debugger;
    alert(msg);
}
debug("Meu nome é Celso");
*/

/*
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
*/

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