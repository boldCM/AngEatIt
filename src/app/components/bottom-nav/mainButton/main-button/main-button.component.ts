import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public handleOverlay(): void {
    return console.log('open overlay');
  }
}