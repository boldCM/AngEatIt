import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { MainButtonComponent } from './components/bottom-nav/mainButton/main-button.component';
import { OverlayItemComponent } from './components/overlay/overlay-item/overlay-item.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListPageComponent } from './pages/recipe-list-page/recipe-list-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    MainButtonComponent,
    OverlayComponent,
    OverlayItemComponent,
    RecipeListComponent,
    RecipeListPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
