class Carro {
    constructor(modelo, chassi, qtdPortas) {
      this.modelo = modelo;
      this.chassi = chassi;
      this.qtdPortas = qtdPortas;
    }
    
    andar() {
      console.log('vrum vrum');
    }
  }
  
  class Sonix extends Carro {
    constructor(modelo, chassi, qtdPortas) {
      super(modelo, chassi, qtdPortas);
    }
    
    abrirTetoSolar() {
      console.log('abrindo teto solar');
    }
  }
  
  const sonix = new Sonix('Sonix', '71289721982718921781', 5);
  sonix.abrirTetoSolar();
  sonix.andar();
  
  console.log(sonix.modelo, sonix.chassi, sonix.qtdPortas);