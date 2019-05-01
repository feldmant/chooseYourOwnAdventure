import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';

import { TemperatureService } from '../../services/temperature-service.service';

@Component({
	selector: 'app-thermometer',
	templateUrl: './thermometer.component.html',
	styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
	temperature: number;
	_subscription: any;

	constructor(private provider: TemperatureService) {
		this.temperature = this.provider.temperature;
		this._subscription = this.provider.tempChange.subscribe((value) => { this.temperature = value })
	}
	
	ngOnInit() {
  	}

  	ngOnDestroy() {
  		this._subscription.unsubscribe();
  	}


}
