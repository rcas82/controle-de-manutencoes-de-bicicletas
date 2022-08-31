import { Component, OnInit } from '@angular/core';
import { Shared } from './util/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'controle-de-manutencoes-de-bicicletas';

  imageURL: string = './assets/resources/maintenance-advertising.png';
  isHidePalnel = true;
  constructor() { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
  }

  getBackgroundImage() {
    return {
      'position': 'absolute',
      'left': '0',
      'top': '0',
      'width': '100%',
      'height': '100vh',
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed',
      'background-position': 'center',
      'background-image': 'url(' + this.imageURL + ')',
      'opacity': '0.1',
      'z-index': -1
    };
  }

}
