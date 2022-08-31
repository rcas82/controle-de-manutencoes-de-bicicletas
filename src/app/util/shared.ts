import { Constants } from './constants';

export class Shared {
  constructor() { }

  public static initializeWebStorage(): void {
    localStorage.setItem(Constants.BIKES_KEY, JSON.stringify([]));
  }
}
