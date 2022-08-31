import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Bike } from './../model/bike';
import { BikePromiseService } from './bike-promise.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  bike!: Bike;
  bikes?: Bike[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private bikePromiseService: BikePromiseService) { }

  ngOnInit(): void {
    this.bike = new Bike('', '', '');
    this.bikePromiseService
      .getAll()
      .then((promiseBikes) => (this.bikes = promiseBikes));
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.bike.id == 0) {
      this.bike.id = this.getNextId();
      this.bikePromiseService.save(this.bike);
    } else {
      this.bikePromiseService.update(this.bike);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.bike = new Bike('', '', '');

    this.bikePromiseService
      .getAll()
      .then((promiseBikes) => (this.bikes = promiseBikes));
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de bicicletas cadastrados sem pressionar o submit.
   * @param bike
   */
  onEdit(bike: Bike) {
    this.isShowMessage = false;
    let clone = Bike.clone(bike);
    this.bike = clone;
  }

  onCancel() {
    this.isShowMessage = false;
    this.bike = new Bike('', '', '');
  }

  onDelete(delBike: Bike) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + delBike.nome
    );
    if (!confirmation) {
      return;
    }
    this.isShowMessage = true;
    this.bikePromiseService
      .delete(delBike)
      .then(
        (result) => {
          this.message = 'O item foi removido com sucesso!';
          this.bike = new Bike('', '', '');
          this.bikePromiseService
            .getAll()
            .then((promiseBikes) => (this.bikes = promiseBikes));
        }
      )
      .catch(
        (error) => {
          this.message = 'Opps! O item não pode ser removido!';
        }
      );
  }

  getNextId(): number {
    if (this.bikes != null) {
      const maxId = Math.max(...this.bikes.map((b) => b.id), 0);
      return maxId + 1;
    } else {
      return 1;
    }
  }
}
