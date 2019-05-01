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
	thermHeight: number = 130;

	constructor(private provider: TemperatureService) {
		this.temperature = this.provider.temperature;
		this._subscription = this.provider.tempChange.subscribe((value) => { 
			this.temperature = value; 
			this.calcHeight(); })
		this.calcHeight();
	}
	
	ngOnInit() {
  	}

  	ngOnDestroy() {
  		this._subscription.unsubscribe();
  	}

  	calcHeight() {
  		/** 3.0 degrees is at 30, 100 per degree **/
  		let tempOffset = 3.0-this.temperature;
  		let pxOffset = tempOffset*100
  		this.thermHeight = 30+pxOffset;
  	}


}
