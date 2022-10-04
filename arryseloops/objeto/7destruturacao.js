// desestruturação de  obijetos - Destucturing

const pessoa ={
    nome:"jose",
    idade: 20,
    cidade: "Salvador",
    profisao :"Dev"
};

// const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa;

console.log (nome, idade);
console.log(outros)