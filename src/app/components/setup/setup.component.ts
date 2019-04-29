import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Plot } from '../../model/plot';
import { ActionsProviderService } from '../../model/address-provider.service';

@Component({
	selector: 'app-setup',
	templateUrl: './setup.component.html',
	styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

	id: number;
	currentPlot: Plot;	

	constructor(private route: ActivatedRoute, private provider: ActionsProviderService) { }

	ngOnInit() {
		let id = this.route.snapshot.params(['id']);
		this.plot = this.provider.getPlot(id);

		/** subscribe to observable to get temperature **/

		localStorage.setItem('chooseYourOwnAdventure_gameState', JSON.stringify({currentPlotId: id, temperature: temperature}));
  	}

}
