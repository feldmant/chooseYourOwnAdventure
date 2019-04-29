import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { SetupComponent } from './components/setup/setup.component';
import { ThermometerComponent } from './components/thermometer/thermometer.component';
import { FieryDeathComponent } from './components/fiery-death/fiery-death.component';
import { HappilyEverAfterComponent } from './components/happily-ever-after/happily-ever-after.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ResolutionComponent,
    SetupComponent,
    ThermometerComponent,
    FieryDeathComponent,
    HappilyEverAfterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
