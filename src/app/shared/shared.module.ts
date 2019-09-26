import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { MatchComponent } from './components/match/match.component';

const declarables = [CardLinkComponent, MatchComponent]

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [...declarables],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...declarables
  ]
})
export class SharedModule {}
