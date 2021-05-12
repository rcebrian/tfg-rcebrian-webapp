import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from '../../../../@core/models/dto/map';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators/map';


@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);

  constructor(private db: AngularFirestore) {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }

  getMarkers(): Observable<any[]> {
    return this.db.collection('/dev-devices/106/locations', (ref) => ref.orderBy('timestamp', 'asc').limitToLast(1))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return snaps.map(snap => {
            // @ts-ignore
            return new GeoJson([snap.payload.doc.data().location.longitude, snap.payload.doc.data().location.latitude]);

          });
        }),
      );
  }
}
