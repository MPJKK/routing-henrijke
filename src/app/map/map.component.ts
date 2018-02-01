import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public digitransitService: DigitransitService, private router: Router) { }
    title = ' Jee toimii!';
  output;
    route() {
        this.digitransitService.getRoutes().subscribe( response => {
            this.output = response.data['stops'];
            console.log(response.data['stops'][0]);
            console.log(response.data['stops'][0]['patterns'][0].directionId);
        });
    }
    maps(lat, lon) {
        this.digitransitService.lat = lat;
        this.digitransitService.lon = lon;
        this.router.navigate([`map`]);
    }
    ngOnInit() {
        this.route();
    }

}
