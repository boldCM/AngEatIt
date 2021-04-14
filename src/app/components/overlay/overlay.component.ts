import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  // OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  // animations
})
export class OverlayComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  // wenn ich die message setzen würde:
  // get message(): string {
  //   return this._message;
  // }
  // set message(message: string) {
  //   this._message = message;
  //   this.state = 'opened';
  // }
  // private _message: string;
  @Output()
  closed = new EventEmitter();

  // showOverlay() {
  //   this.state = 'opened';
  // }

  // @Output()
  // closed = new EventEmitter();

  constructor() {}
}
