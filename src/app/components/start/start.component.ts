import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 	selector: 'app-start',
   	templateUrl: './start.component.html',
  	styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	attemptToGet_playerName: any;
	attemptToGet_gameSate: any;
	playerName: string = 'Player Name';
	previousGame: boolean = false;
	resumeGameId: number;
	temperature: number = 1.5;

	constructor() { }

	ngOnInit() {
		this.attemptToGet_playerName = localStorage.getItem('chooseYourOwnAdventure_playerName')
		if (this.attemptToGet_playerName != null) {
			this.playerName = this.attemptToGet_playerName;
		}
		this.attemptToGet_gameState = localStorage.getItem('chooseYourOwnAdventure_gameState')
		if (this.attemptToGet_gameState != null) {
			this.resumeGameId = JSON.parse(
			this.attemptToGet_gameState).currentPlotId;
			previousGame = true;
		}

		/** setup observable for temperature **/
	}

	resumeGame() {
		/** send temperature to observable **/
		this.router.navigate(['/setup', resumeGameId]);
	}

	startNew() {
		/** send temperature to observable **/
		localStorage.setItem('chooseYourOwnAdventure_gameState', JSON.stringify({currentPlotId: 1, temperature: 1.5}));
		this.router.navigate(['/setup', 1]);
	}

}
