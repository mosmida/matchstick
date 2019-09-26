// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { MatchesRowComponent } from './components/matches-row/matches-row.component';
import { SharedModule } from '@matchStick/shared';
import { ChoicesPadComponent } from './components/choices-pad/choices-pad.component';

@NgModule({
    imports: [
        GameRoutingModule,
        SharedModule
    ],
    declarations: [
        GameComponent,
        MatchesRowComponent, 
        ChoicesPadComponent
    ],
    exports: [
        GameComponent,
        MatchesRowComponent
    ]
})
export class GameModule {

}
