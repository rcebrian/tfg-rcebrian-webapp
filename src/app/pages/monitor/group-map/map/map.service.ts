import { Injectable } from '@angular/core';
import { environment } from "../../../../../environments/environment";
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/mapbox/outdoors-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 40.4293283;
  lng = -3.7046224;
  zoom = 15;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }
  buildMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
