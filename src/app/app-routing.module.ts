import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { Portal } from './portal';
import { BuyItNowComponent } from './components/buy-it-now/buy-it-now.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

const routes: Routes = [
  { path: 'portal', component: Portal, },
  { path: 'buyitnow', component: BuyItNowComponent, },
  { path: '', redirectTo: '/portal', pathMatch: 'full' }
 ]

  @NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
