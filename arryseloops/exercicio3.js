const numeros =[0, 5 , 3, 69, 45, 18, 13, 2]; // tamaho 8

let soma = 0;
for(let i= 0; i < numeros.length; i++){
    //sera execultado para o de  0 ate 7| 8 não sera mais executado
    soma = soma + numeros[i];
    //soma +=  numeros[i]

}

console.log(soma);