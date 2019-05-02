import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Plot } from '../../model/plot';
import { ActionsProviderService } from '../../model/actions-provider.service';

@Component({
	selector: 'app-setup',
	templateUrl: './setup.component.html',
	styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

	id: number;
	currentPlot: Plot;	
	temperature: number;

	constructor(private route: ActivatedRoute, private provider: ActionsProviderService,
		private router: Router) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.currentPlot = this.provider.getPlot(id);
		localStorage.setItem('chooseYourOwnAdventure_gameState', JSON.stringify({currentPlotId: id, temperature: this.temperature}));
  	}

}
