const palavra  = 'abaracadabra' ; // 5 letras a

 let quantidade = 0;

  for (let letra of palavra){
    if (letra === 'a'){
     quantidade++;
    }
  }
   console.log(quantidade);