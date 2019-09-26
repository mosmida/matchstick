// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
    imports: [
        SettingsRoutingModule
    ],
    declarations: [
        SettingsComponent,
    ],
    exports: [
        SettingsComponent,
    ]
})
export class SettingsModule {

}
