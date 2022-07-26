import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';
import { ShapeService } from './shape.service';

const iconRetinaUrl = '../../../../assets/marker-icon-2x.png';
const iconUrl = '../../../../assets/marker-icon.png';
const shadowUrl = '../../../../assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map;
  private states;

  constructor(private markerService: MarkerService,
    private shapeService: ShapeService) { }
  ngAfterViewInit(): void {
    this.initMap();
    // this.markerService.makeCapitalMarkers(this.map);
    this.markerService.makeCapitalCircleMarkers(this.map);
    this.shapeService.getStateShapes().subscribe((states) => {
        this.states = states;
        this.initStatesLayer();
      });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.states, {
      style: feature => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: e => (this.highlightFeature(e)),
          mouseout: e => (this.resetFeature(e)),
        })
      )
    });
    this.map.addLayer(stateLayer);
    stateLayer.bringToBack();
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042'
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private resetFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B'
    });
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 33.160556, 36.124444],
      zoom:12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:20,
      minZoom:12,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}