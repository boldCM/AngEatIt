import { Component, OnInit } from '@angular/core';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({
          width: '0px',
          overflow: 'hidden',
          opacity: 0,
        }),
        group([
          animate(
            '0.3s ease-in',
            style({
              width: '!',
              opacity: 0.7,
            })
          ),
          query('.overlay__container', [
            style({ transform: 'translateX(100%)' }),
            group([
              animate(
                '0.3s ease-in',
                style({
                  transform: 'translateX(0%)',
                })
              ),
            ]),
          ]),
        ]),
      ]),

      transition(':leave', [
        style({
          overflow: 'hidden',
          opacity: 0.7,
        }),
        group([
          animate(
            '0.3s ease-in-out',
            style({
              width: '0',
              opacity: 0,
            })
          ),
          query('.overlay__container', [
            style({
              transform: 'translateX(0%)',
            }),
            group([
              animate(
                '0.3s ease-out',
                style({ transform: 'translateX(100%)' })
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class MainButtonComponent implements OnInit {
  public isMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  public handleOverlay(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
