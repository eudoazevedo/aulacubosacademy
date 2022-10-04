//spread ...
const pessoa ={
    nome:"jose",
    idade: 20,
    cidade: "Salvador",
    profisao :"Dev"
};
 const endereco ={
    rua: "Aqui",
    numero:"32",
    bairro: "Bairro legal"
 }

  const objetoFundo = {
    ...pessoa,
    ...endereco,
    novaPropriedade:20
  }