import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Action } form '../../model/actions';
import { ActionsProviderService } from '../../model/actions-provider.service';

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


	constructor(private route: ActivatedRoute, private provider: AddressProviderService) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		let choice = this.route.snapshot.params['choice'];
		this.action = this.provider.getAction(id, choice);
		updateTemp(this.action.tempDelta);
		if (this.temperature >= 3.0) {
			this.router.navigate(['/fierydeath'])
		} else if (this.temperature <= 1.0) {
			this.router.navigate(['/happilyeverafter'])
		}
	}

	updateTemp(tempDelta: number;) {
		/** update temperature observable **/
	}
}
