import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);

  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }
}
