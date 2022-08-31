export class Bike {

  id!: number;
  nome: string;
  modelo: string;
  marca: string;
  data?: Date;
  valor?: number;
  descricao?: string;

  constructor(nome: string, marca: string, modelo: string) {
    this.id = 0;
    this.nome = nome;
    this.marca = marca;
    this.modelo = modelo;
  }

  public static clone(bike: Bike) {
    let b: Bike = new Bike(bike.nome, bike.marca, bike.modelo);
    b.id = bike.id;
    b.data = bike.data
    b.valor = bike.valor;
    b.descricao = bike.descricao;
    return b;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param bike
   * @returns
   */
  public static toWS(bike: Bike) {
    let b: Bike = new Bike(bike.nome, bike.marca, bike.modelo);
    b.id = bike.id;
    b.data = bike.data
    b.valor = bike.valor;
    b.descricao = bike.descricao;
    return b;
  }
}
