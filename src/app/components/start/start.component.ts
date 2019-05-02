import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemperatureService } from '../../services/temperature-service.service'

@Component({
 	selector: 'app-start',
   	templateUrl: './start.component.html',
  	styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	attemptToGet_playerName: any;
	attemptToGet_gameState: any;
	playerName: string = 'Player Name';
	previousGame: boolean = false;
	resumeGameId: number;
	temperature: number = 1.5;

	constructor(private router: Router, private provider: TemperatureService) { }

	ngOnInit() {
		this.attemptToGet_playerName = localStorage.getItem('chooseYourOwnAdventure_playerName')
		if (this.attemptToGet_playerName != null) {
			this.playerName = this.attemptToGet_playerName;
		}
		this.attemptToGet_gameState = localStorage.getItem('chooseYourOwnAdventure_gameState')
		if (this.attemptToGet_gameState != null) {
			this.resumeGameId = JSON.parse(this.attemptToGet_gameState).currentPlotId;
			this.previousGame = true;
		}
	}

	resumeGame() {
		this.router.navigate(['/setup', this.resumeGameId]);
		this.provider.setTemp(JSON.parse(this.attemptToGet_gameState).temperature);
	}

	startNew() {
		this.provider.setTemp(1.5);
		this.router.navigate(['/setup', 1]);
	}

}
