import { Component, Input, OnInit } from '@angular/core';
import { MapService } from './map.service';
import * as mapboxgl from 'mapbox-gl';
import { FeatureCollection, GeoJson } from '../../../../@core/models/dto/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() users: number[];

  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/mapbox/outdoors-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 40.4293283;
  lng = -3.7046224;
  zoom = 15;

  // data
  source: Array<any> = new Array<any>();
  markers: Array<Observable<any>> = new Array<Observable<any>>();

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.users.length; i++) {
      this.markers[i] = this.mapService.getMarkers([this.users[i]]);
    }
    // this.users.forEach(userId => {
    //   this.markers[];
    // });
    this.initializeMap();
  }

  private initializeMap() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });


    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat];
    });


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      for (let i = 0; i < this.users.length; i++) {
        /// register source
        this.map.addSource(String(this.users[i]), {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
        });

        /// get source
        this.source[i] = this.map.getSource(String(this.users[i]));

        /// subscribe to realtime database and set data source
        this.markers[i].subscribe(markers => {
          const data = new FeatureCollection(markers);
          this.source[i].setData(data);
        });

        /// create map layers with realtime data
        this.map.addLayer({
          id: String(this.users[i]),
          source: String(this.users[i]),
          type: 'symbol',
          layout: {
            'icon-image': 'rocket-15',
            'text-offset': [0, 1.5],
          },
        });
      }

    });

  }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      // @ts-ignore
      center: [this.lng, this.lat],
    });
  }
}
