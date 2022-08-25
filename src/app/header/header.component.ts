import * as M from 'materialize-css';
import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav? : ElementRef;

  @Input() title: any;

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

}
