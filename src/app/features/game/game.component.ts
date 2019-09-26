import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Players } from './models/players';

@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})
export class GameComponent {
    settings = {
        matchesSize : 30,
        maxChoice: 3
    }
    matchesList: Number[] = [];
    endGame: boolean;
    currentPlayer : String;
    constructor(private _snackBar: MatSnackBar) {
        this.initGame();
    }

    /**
     *  Action handler when the user chooses a number
     * @param size 
     */
    onChoiceSelect(size:number) {
        this.playerPlay(size);
        if(!this.endGame) {
            this.computerPlay();
        } 
    }

    /**
     * when a player chooses a number, the chosen number of matches is removed from the set of matches
     * @param size : number of matches chosen 
     */
    playerPlay(size: number) {
        this.removeMatchs(size, Players.PLAYER1);
    }
    /**
     * computer turn, a number is randomly selected and removed from the match list
     */
    computerPlay() {
        // the number chosen by computer must be less then the number of matches
        let size = this.generateNumberFromRange(1,this.settings.maxChoice);
        if(size > this.matchesList.length) {
            size =  this.matchesList.length;
        }
        this.removeMatchs(size, Players.COMPUTER);
        this._snackBar.open('l\'ordinateur a choisi '+ size +' allumette(s)', 'Fermer');
    }

    /**
     * game initialization
     */
    initGame() {
        const nbMatches = this.generateNumberFromRange(1,this.settings.matchesSize);
        this.matchesList = Array.from(Array(nbMatches).keys());
        this.endGame = false;
    }
  
    /**
     * return a number generate between a min and max
     * @param min 
     * @param max 
     */
    generateNumberFromRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * remove match from the list
     * @param size : number of matchs to remove 
     * @param player : the name of the player who removes the matches
     */
    removeMatchs(size: number, player:string){
        this.matchesList.splice(0,size);
        this.currentPlayer = player
        this.checkEndGame();
    }

    /**
     * checks the end of game
     */
    checkEndGame(){
       this.endGame = this.matchesList.length === 0;
    }
}
