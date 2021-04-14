import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from '@angular/core';
import { OverlayComponent } from 'src/app/components/overlay/overlay.component';
import { OverlayService } from 'src/app/components/overlay/overlay.service';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent implements OnInit {
  @Output() public open = new EventEmitter<any>();

  constructor(
    public overlay: OverlayService,
    public overlayComponent: OverlayComponent
  ) {
    // customElements.define(OverlayComponent)
    document.body.appendChild(OverlayComponent as any);
  }

  ngOnInit(): void {}
  // public handleOverlay(): void {
  // this.open.emit('app-overlay');
  // document.createElement('overlay');
  // document.querySelector('app-overlay');
  // document.appendChild('.overlay');

  // }
}
