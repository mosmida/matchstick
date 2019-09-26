import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'game', pathMatch: 'full' },
      { path: 'game', loadChildren: './features/game/game.module#GameModule' },
      { path: 'exit', component:AppComponent,data : {exit :true} },
      { path: '**', redirectTo: 'game', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

