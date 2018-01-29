import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { SetupComponent } from './setup/setup.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {CommonModule} from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    SetupComponent,
    TopBarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      AgmCoreModule.forRoot({
          apiKey: ' AIzaSyCqkk-YbDuO_-eL1I6SOUrEudyZVkUVBzo '

      })
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }