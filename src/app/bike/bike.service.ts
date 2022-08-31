import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Bike } from '../model/bike';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class BikeService {
  bikes!: Bike[];
  private bikeSource!: BehaviorSubject<number>;
  constructor() {
    this.bikes = WebStorageUtil.get(Constants.BIKES_KEY);
    this.bikeSource = new BehaviorSubject<number>(this.bikes.length);
  }

  save(bike: Bike) {
    this.bikes = WebStorageUtil.get(Constants.BIKES_KEY);
    this.bikes.push(bike);
    WebStorageUtil.set(Constants.BIKES_KEY, this.bikes);
  }

  update(bike: Bike) {
    this.bikes = WebStorageUtil.get(Constants.BIKES_KEY);
    this.delete(bike.nome);
    this.save(bike);
  }

  delete(nome: string): boolean {
    this.bikes = WebStorageUtil.get(Constants.BIKES_KEY);
    this.bikes = this.bikes.filter((bike) => {
      return bike.nome?.valueOf() != nome?.valueOf();
    });

    WebStorageUtil.set(Constants.BIKES_KEY, this.bikes);
    return true;
  }

  isExist(value: string): boolean {
    this.bikes = WebStorageUtil.get(Constants.BIKES_KEY);
    for (let bike of this.bikes) {
      if (bike.nome?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getBikes(): Bike[] {
    this.bikes = WebStorageUtil.get(Constants.BIKES_KEY);
    return this.bikes;
  }

  notifyTotalBikes() {
    this.bikeSource.next(this.getBikes()?.length);
  }

  asObservable(): Observable<number> {
    return this.bikeSource;
  }
}
