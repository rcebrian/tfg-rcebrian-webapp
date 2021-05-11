import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/mapbox/outdoors-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 40.4293283;
  lng = -3.7046224;
  zoom = 15;

  constructor(private mapService: MapService) {
  }

  private initializeMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat],
        });
      });
    }

    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });

    this.map.addControl(new mapboxgl.NavigationControl());


  }

  ngOnInit(): void {
    this.initializeMap();
  }

}
