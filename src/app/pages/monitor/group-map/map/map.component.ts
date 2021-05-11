import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import * as mapboxgl from 'mapbox-gl';
import { FeatureCollection, GeoJson } from '../../../../@core/models/dto/map';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

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

  // data
  source: any;
  markers: Observable<any>;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.markers = this.mapService.getMarkers();
    this.initializeMap();
  }

  private initializeMap() {
    /// locate the user
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat],
    //     });
    //   });
    // }

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

      /// register source
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });

      /// get source
      this.source = this.map.getSource('firebase');

      /// subscribe to realtime database and set data source
      this.markers.subscribe(markers => {
        console.log(markers);
        const data = new FeatureCollection(markers);
        this.source.setData(data);
      });

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5],
        },
      });

    });

  }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      // @ts-ignore
      center: [this.lng, this.lat],
    });
  }
}
