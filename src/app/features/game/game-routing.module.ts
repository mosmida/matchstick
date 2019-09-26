import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GameComponent,
        data: { title: 'Game' },
      }
    ])
  ],
  exports: [RouterModule]
})
export class GameRoutingModule { }
