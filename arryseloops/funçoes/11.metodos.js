

const pessoa1 ={
    nome:" jose",
    idade:30,
    profissao:"professor",
    apresntar: function () {
        const faxeEtaria = this.determinarFaixaEtaria(this.idade);

    console.log(`Sou ${pessoa.nome}, sou um(a) ${faxeEtaria} de ${pessoa.idade}e sou ${pessoa.profissao}.`)


    },

    determinarFaixaEtaria: function(){
        if (this.idade <= 21){
            return "jovem";
        }else if (this.idade < 66){
            return "adulto(a)";
        }else{
            return "idoso(a)";
        }

    }
}

pessoa1.apresentar();
console.log(pessoa1.determinarFaixaEtaria());
