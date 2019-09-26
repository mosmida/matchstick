import 'hammerjs';
import { NgModule } from '@angular/core';;

import { AppComponent } from './app.component';
import { SharedModule } from '@matchStick/shared';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ SharedModule, CoreModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
