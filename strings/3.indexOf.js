// saber se um email é valido
// tem que  ter um pelo menos um @
// tem que  ter pelo menos  um ponto  depois do @

const possivelEmail = "jose@cubos.academy";

const indexArroba = possivelEmail.indexOf("@"); //4

const indexPonto = possivelEmail.indexOf(".", indexArroba);

if (indexPonto > indexArroba) {
    console.log("Email atende as requisiçoes");
}else {
    console.log("Não há nenhum ponto aós o arroba.")
}

