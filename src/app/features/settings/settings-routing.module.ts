import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent,
        data: { title: 'Settings' },
      }
    ])
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
