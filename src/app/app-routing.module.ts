import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

const routes: Routes = [
  {
    path: 'Home',
    component: BottomNavComponent,
  },
  {
    path: 'Einkaufsliste',
    component: BottomNavComponent,
  },
  {
    path: 'Rezeptübersicht',
    component: BottomNavComponent,
  },
  {
    path: '',
    component: BottomNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
