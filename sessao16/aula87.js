// O que o laço for...of, uma função geradora e o símbolo tem em comum?
const equipe = {
    quantidade: 3,
    maturidade: 'alta',
    senior: 'Luis',
    pleno: 'Márcia',
    junior: 'Christian',
    [Symbol.iterator]: function*(){
      yield this.senior;
      yield this.pleno;
      yield this.junior;
    }
  }
  
  for(let integrante of equipe) {
    console.log(integrante);
  }