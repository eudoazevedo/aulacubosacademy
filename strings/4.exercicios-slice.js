// exercicios - slice

//quero obter apenas os dois digitos
//do estado de um  cidade

const cidade = "rio de janeiro-rj";

const penultimoindex =cidade.length -2;
let estado = cidade.slice(penultimoindex);
console.log(estado);
