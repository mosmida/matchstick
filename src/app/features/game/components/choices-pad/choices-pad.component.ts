import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'choices-pad',
    templateUrl: 'choices-pad.component.html',
    styleUrls: ['choices-pad.component.scss']
})
export class ChoicesPadComponent {
    @Output() choiceSelect: EventEmitter<Number> = new EventEmitter<Number>(); 
    @Input() max: number = 3;
    selectChoice(number: number) {
        this.choiceSelect.emit(number);
    }
}
