const array =[1,2,3,4,5,6];
// const a = arra[0]
// const a = arra[1]


///const [a, ...resto, b] = array; // não funciona 

const [a,b, ...resto] = array; //funciona.rest tem que ser o ultimo

console.log(a, b, resto);