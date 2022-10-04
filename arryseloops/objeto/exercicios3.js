const produtosConsumidos =  [
    {
         nome:"Pão de Alho",
         precoUnit:1500,
        quantidade: 3
        
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quantidade: 2
    },
    {
        nome: "agua",
        precoUnit: 5000,
        quantidade: 1
    }
]

const cartao ={
    nome: "jose",
    idade: 30,
    produtosConsumidos

    };

    console.log(cartao.nome); //jose
    console.log(cartao.idade); //30
    cartao.idade= 31;
    console.log(cartao.idade); //31
    console.log(cartao.produtosConsumidos[0].nome); // pão de alho
    console.log(cartao.produtosConsumidos[produtosConsumidos.length -1].precoUnit); 
    
