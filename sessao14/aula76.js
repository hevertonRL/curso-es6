// utilizar orientação a objetos no JavaScript não precisa ser complicado

// modelo, chassi, quantidade de portas
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
  
  const carroBasico = new Carro('Basico', '12709721017092l', 2);
  
  console.log(carroBasico.modelo, carroBasico.chassi, carroBasico.qtdPortas);
  carroBasico.andar();