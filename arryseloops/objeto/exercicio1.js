const pessoa ={
    nome: "eudo",
    idade: 28,
    altura: 1.75,
    temCNH: true,
    apelidos: ["jr", "Juninho"]

};

let textoCNH = "";
if (pessoa.temCNH){
    textoCNH = "possui CNH";
}else{
    textoCNH ="não possui CNH" 
}
console.log(`${pessoa.nome}tem ${pessoa.idade}anos , ${pessoa.altura}m, ${textoCNH}e  tem os eguintes aoelidos:
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`);