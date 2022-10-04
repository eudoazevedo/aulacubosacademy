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

     for(let produto of produtosConsumidos){
         totalApagar += produto.precoUnit * produto.quantidade;
     }
      const totalFormatado = (totalApagar/100).toFixed(2);
     console.log(`sr(a) ${cartao.nome}, o total a pagar é R$ ${totalFormatado}`);
 