function apresentar(pessoa) {
    if(pessoa.idade < 25){
        console.log(`sou ${pessoa.nome},Sou um (a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`sou ${pessoa.nome},Sou um (a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }else{ 
        console.log(`sou ${pessoa.nome},Sou um (a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}

const pessoa1 ={
    nome:" jose",
    idade:30,
    profissao:"professor"
}

apresentar(pessoa1)

const pessoa2 ={
    nome:" pedro",
    idade:19,
    profissao:"professor"
}


apresentar(pessoa2)

const pessoa3 ={
    nome:" jose",
    idade:65,
    profissao:"professor"
}

apresentar(pessoa3)

