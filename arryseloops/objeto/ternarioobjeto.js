const pessoa ={
    nome: "eudo",
    idade: 28,
    altura: 1.75,
    temCNH: true,
    apelidos: ["jr", "Juninho"]

};

const textoCNH = pessoa.temCNH ? "possui.CNH" : "não possui CNH"; // ternario " condição ?  valorverdadeiro : valorfalso"
 
console.log(`${pessoa.nome}tem ${pessoa.idade}anos , ${pessoa.altura}m, ${textoCNH}e  tem os eguintes aoelidos:
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`);