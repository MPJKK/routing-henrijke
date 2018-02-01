import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';
import {DigitransitService} from '../services/digitransit.service';


@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})


export class RoutesComponent implements OnInit {
    output;
    constructor(public digitransitService: DigitransitService, private router: Router) {
    }
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
