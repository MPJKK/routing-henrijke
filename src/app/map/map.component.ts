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

  ngOnInit() {
    console.log(this.digitransitService.lat + ' ' + this.digitransitService.lon);
  }

}
