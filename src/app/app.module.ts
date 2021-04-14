import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { MainButtonComponent } from './components/bottom-nav/mainButton/main-button.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayItemComponent } from './components/overlay/overlay-item/overlay-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    MainButtonComponent,
    OverlayComponent,
    OverlayItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
