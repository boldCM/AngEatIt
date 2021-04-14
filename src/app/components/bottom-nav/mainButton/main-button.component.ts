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
      // document.documentElement.style.setProperty('$open', 'true');
    } else {
      this.isMenuOpen = false;
    }
  }
}
