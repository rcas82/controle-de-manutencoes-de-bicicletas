export class Bicicleta {

  constructor(public modelo: string, public marca: string, public data: Date, public valor: number, public descricao: string) {
    this.modelo = modelo;
    this.marca = marca;
    this.data = data;
    this.valor = valor;
    this.descricao = descricao;
  }
}
