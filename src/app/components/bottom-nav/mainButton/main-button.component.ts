import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent implements OnInit {
  public isMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  public handleOverlay(): void {
    if (!this.isMenuOpen) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
    }

    console.log('ich will meinen button');
  }
}
