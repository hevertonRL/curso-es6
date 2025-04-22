// operações assíncronas com promises

// Não resolvido: estado inicial, quando está esperando algo ser
//   finalizado;
// Resolvido: estado no qual a operação foi concluída, sem erros;
// Rejeitado: estado no qual a operação foi concluída, porém, com erros

let promise = new Promise((resolve, reject)=> {
    let resultado = false;
    if(resultado) {
      resolve("deu tudo certo");
    } else {
      reject("deu tudo errado!");
    }
  });
  
  promise.then((data) => console.log(`${data}`));
  promise.catch((data) => console.log(`${data}`));