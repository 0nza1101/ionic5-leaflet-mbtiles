import { Component } from '@angular/core';

import 'leaflet';
import 'leaflet-tilelayer-mbtiles-ts';

declare var L: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public map: L.Map;
  public center: L.PointTuple;

  constructor() {}

  public ionViewDidEnter() {
    // Setup leaflet map
    this.initMap();
  }

  public initMap() {
    this.center = [48.864716, 2.349014]; // Paris

    this.map = L.map('map', {
      center: this.center,
      zoom: 8
    });

    const mb = L.tileLayer.mbTiles('assets/countries-raster.mbtiles', {
      minZoom: 0,
      maxZoom: 6
    }).addTo(this.map);

    mb.on('databaseloaded', (ev) => {
      // tslint:disable-next-line: no-console
      console.info('MBTiles DB loaded', ev);
    });
    mb.on('databaseerror', (ev) => {
      // tslint:disable-next-line: no-console
      console.info('MBTiles DB error', ev);
    });
  }
}
