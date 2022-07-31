import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '';

  constructor(private http: HttpClient,
    private popup: PopUpService) {
  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        marker.addTo(map);
      }
    });
  }
  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
        const maxPop = Math.max(...res.features.map(x => x.properties.population), 0);
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon], {
            radius: MarkerService.scaledRadius(c.properties.population, maxPop)
          });
          circle.bindPopup(this.popup.makeCapitalPopup(c.properties));
         circle.addTo(map);
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }
}
