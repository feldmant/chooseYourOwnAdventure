import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Action } from '../../model/actions';
import { ActionsProviderService } from '../../model/actions-provider.service';
import { TemperatureService } from '../../services/temperature-service.service';


@Component({
	selector: 'app-resolution',
	templateUrl: './resolution.component.html',
	styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {
	
	id: number;
	choice: string;
	action: Action;
	tempDelta: number;
	temperature: number;


	constructor(private route: ActivatedRoute, 
		private provider: ActionsProviderService, private router: Router, private tempProvider: TemperatureService) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		let choice = this.route.snapshot.params['choice'];
		this.action = this.provider.getAction(id, choice);
		this.updateTemp(this.action.tempDelta);
		if (this.temperature >= 3.0) {
			this.router.navigate(['/fierydeath'])
		} else if (this.temperature <= 1.0) {
			this.router.navigate(['/happilyeverafter'])
		}
	}

	updateTemp(tempDelta: number): void{
		this.temperature = this.tempProvider.updateTemp(tempDelta);
	}
}
