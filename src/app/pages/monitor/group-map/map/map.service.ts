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

  getMarkers(users: number): Observable<any[]> {
    return this.db.
    collection('/dev-devices', (ref) =>
      ref.where('userId', '==', users)
        .orderBy('timestamp', 'asc').limitToLast(1))
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



/*     id - timestamp - location
map ==== [][][][] ======================== firestore [][][][]
9 nuevo

where (
  where ( id -1
    timestamp - limit 1
  )
)

 */







