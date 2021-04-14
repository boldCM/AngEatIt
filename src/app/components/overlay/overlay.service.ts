import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { OverlayComponent } from './overlay.component';

@Injectable()
//   {
//   providedIn: 'root'
// }
export class OverlayService {
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  showOverlayAsComponent() {
    // not to sure if I need message here...
    // create Element
    const overlay = document.createElement('overlay-component');

    // create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      OverlayComponent
    );
    const overlayComponentRef = factory.create(this.injector, [], overlay);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(overlayComponentRef.hostView);

    // Listen to the close event
    overlayComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(overlay);
      this.applicationRef.detachView(overlayComponentRef.hostView);
    });

    // set the message (auch wenn ich keine habe:)
    // overlayComponentRef.instance.message= message

    // Add to the DOM
    document.body.appendChild(overlay);
  }
}
