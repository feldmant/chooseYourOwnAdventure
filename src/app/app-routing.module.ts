import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from
	'./components/start/start.component';
import { SetupComponent } from
	'./components/setup/setup.component';
import { ResolutionComponent } from
	'./components/resolution/resolution.component';
import { ThermometerComponent } from
	'./components/thermometer/thermometer.component';
import { FieryDeathComponent } from './components/fiery-death/fiery-death.component';
import { HappilyEverAfterComponent } from './components/happily-ever-after/happily-ever-after.component';


const routes: Routes = [
	{ path: '', component: StartComponent },
	{ path: 'resolution/:id/:choice', component: ResolutionComponent },
	{ path: 'setup/:id', component: SetupComponent },
	{ path: 'fierydeath', component: FieryDeathComponent },
	{ path: 'happilyeverafter', component: HappilyEverAfterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
