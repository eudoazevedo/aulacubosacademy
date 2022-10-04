//21 anos  ou menos -> jpvem
// 22 a 65 anos -> adulto(a)
//66 ou mais anos -> idoso(a)

function determinarFaixaEtaria(idade){
    if(idade <= 21){
        return "jovem";
}else if(idade < 66){
    return "adulto(a)";
}else{
    return"idosa(a)";

 }
}

console.log(determinarFaixaEtaria(70));