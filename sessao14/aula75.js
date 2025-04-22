// utilizar orientação a objetos no JavaScript não precisa ser complicado

// modelo, chassi, quantidade de portas
function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}

Carro.prototype.andar = function() {
  console.log('vrum vrum');
}

function Sonix(modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas);
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

Sonix.prototype.abrirTetoSolar = function() {
  console.log('abrindo teto solar');
}

var sonix = new Sonix('Sonix', '9218021380328O', 5);
console.log(sonix.modelo);
sonix.andar();
sonix.abrirTetoSolar();