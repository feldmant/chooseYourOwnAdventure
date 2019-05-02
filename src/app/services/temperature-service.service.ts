import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
	temperature: number = 1.5;
	tempChange: Subject<number> = new Subject<number>();
	
  	constructor() { }

  	setTemp(newTemp: number): void {
  		this.temperature = newTemp;
  		this.tempChange.next(this.temperature);
  	}

  	getTemp(): number {
  		return this.temperature;
  	}

  	updateTemp(tempDelta: number): void {
  		this.temperature = this.temperature + tempDelta;
  		if (this.temperature < 1.0) {
  			this.temperature = 1.0;
  		} else if (this.temperature > 3.0) {
  			this.temperature = 3.0;
  		}
  		this.tempChange.next(this.temperature);
  	}
}
