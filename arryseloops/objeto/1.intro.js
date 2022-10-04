const pessoa  = {
     nome: "jose",
     altura: 1.73,
     peso: 60
};
pessoa.nome = "pedro";   //pessoa.[nome] = "pedro"  funciona da mesma maneira 
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.peso}Kg.`);