import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { Portal } from './portal';
import { StartNowComponent } from './components/start-now/start-now.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

const routes: Routes = [
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: 'portal', component: Portal, },
  { path: 'startnow/:customerType/:startType', component: StartNowComponent, },
 ]

  @NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
