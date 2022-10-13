function inverterSting(texto){
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();
    
    let textoInvertido= "";
    for (let letra of arrayDeLetras)  {
        //textoInvertido =textoInvertido + letra
        textoInvertido += letra //faz o mesmo que na linha a cima
    }
    console.log(textoInvertido)
}

inverterSting("Cubos academy");