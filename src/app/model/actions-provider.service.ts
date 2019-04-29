import { Injectable } from '@angular/core';

import { Action } from './actions';
import { Plot } from './plot';
import { PLOTPOINTS } from './start-data';

@Injectable({
  providedIn: 'root'
})
export class ActionsProviderService {

  constructor() { }

  getPlotPoints(): Plot[] {
  	return PLOTPOINTS;
  }

  getPlot(id: number): Plot {
  	let plotPoints: Plot[] = this.getPlotPoints();
  	let plot: Plot = plotPoints.find(
  		p => {return (p.id == id)});
  	return plot;
  }

  getAction(id: number, choice: string): Action {
  	let plot: Plot = this.getPlot(id);
  	let action: Action = plot.choice;
  	return action;
  }
}
