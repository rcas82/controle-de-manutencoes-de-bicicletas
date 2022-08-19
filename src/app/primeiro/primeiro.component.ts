import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  imageURL: string = './assets/resources/maintenance-advertising.png';
  isHidePalnel = true;
  constructor() { }

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
      'opacity': '0.3'
    };
  }

  ngOnInit(): void {
  }

}
