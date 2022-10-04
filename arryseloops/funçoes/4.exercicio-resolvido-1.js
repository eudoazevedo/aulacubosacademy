const pessoaObj = {
  nome: "joão",
  idade: 12,
  altura: 1.4,
  profissoa: "estudante"  
}
function apresemtar(pessoa){
    console.log(`Ola! Meu nome é ${pessoa.nome},sou um jovem de ${pessoa.altura}m e sou ${pessoa.profissao}`);
}
apresemtar(pessoaObj);