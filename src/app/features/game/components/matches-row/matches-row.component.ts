import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'matches-row',
    templateUrl: 'matches-row.component.html',
    styleUrls: ['matches-row.component.scss']
})
export class MatchesRowComponent {
    @Input() matches: Number[];
}
