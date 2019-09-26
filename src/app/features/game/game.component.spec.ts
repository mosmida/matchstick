import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { SharedModule } from '@matchStick/shared';
import { MatchesRowComponent } from './components/matches-row/matches-row.component';
import { ChoicesPadComponent } from './components/choices-pad/choices-pad.component';
import { CoreModule } from 'app/core/core.module';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent, MatchesRowComponent, ChoicesPadComponent ],
      imports: [SharedModule,CoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.initGame();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // init game test
  it(`should have endGame to false and matches size greater then 0`, () => {
    expect(component.matchesList.length).toBeGreaterThan(0);
    expect(component.endGame).toBeFalsy();
  });
  // when player play test
  it(`should have endGame to 'true' and currentPlayer to 'PLAYER 1'`, () => {
    component.matchesList = [1,2,3]; 
    component.currentPlayer = 'PLAYER 1';
    component.playerPlay(3);
    expect(component.endGame).toBeTruthy();
    expect(component.currentPlayer).toEqual('PLAYER 1');
  });
  // when computer play
  it(`should have matches size less than 3`, () => {
    component.matchesList = [1,2,3]; 
    component.computerPlay();
    expect(component.matchesList.length).toBeLessThanOrEqual(3);
  });

    // when computer play
    it(`should have matches size equal to 0`, () => {
      component.matchesList = [1]; 
      component.computerPlay();
      expect(component.matchesList.length).toEqual(0);
    });

  // when generate a number between rangey
  it(`should return a number between 1 and 3`, () => {
    const number = component.generateNumberFromRange(1,3);
    expect(number).toBeLessThanOrEqual(3);
    expect(number).toBeGreaterThanOrEqual(1);
  });

    // when Remove match 
    it(`should have matches size to 1`, () => {
      component.matchesList = [1,2,3]; 
    component.removeMatchs(2,'PLAYER 1');
    expect(component.matchesList.length).toEqual(1);
    });
  
});
