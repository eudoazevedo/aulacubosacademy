function determinarFaixaEtaria(idade){
    if(idade <= 21){
        return "jovem";
}else if(idade < 66){
    return "adulto(a)";
}else{
    return "idosa(a)";

 }
}
function apresentar(pessoa) {

    const faxeEtaria = determinarFaixaEtaria(pessoa.idade);
    
        console.log(`sou ${pessoa.nome},Sou um (a) idoso de ${faxeEtaria} anos e sou ${pessoa.profissao}.`);
    }


const pessoa1 ={
    nome:" jose",
    idade:30,
    profissao:"professor"
}

console.log(pessoa1);