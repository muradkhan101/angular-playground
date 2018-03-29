import { Component, OnInit } from '@angular/core';
import { CanvasRenderer } from './CanvasRenderer';
@Component({
  selector: 'app-canvas-map',
  templateUrl: './canvas-map.component.html',
  styleUrls: ['./canvas-map.component.css']
})
export class CanvasMapComponent  {
  cachedIconsUrls: {};
  url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/D-NW-Bad_Salzuflen-W%C3%BCsten_-_Grenzstein_%28klein%29_in_Pehlen.jpg/440px-D-NW-Bad_Salzuflen-W%C3%BCsten_-_Grenzstein_%28klein%29_in_Pehlen.jpg';
  drawProfile = false;
  coords = {
    lon: 7.815982,
    lat: 51.673858,
  };
  markers = [
    {
      lat: 51.673858,
      lon: 7.815982,
      type: '1',
      base64: undefined,
    },
    {
      lat: 51.373858,
      lon: 7.215982,
      type: '2',
      base64: undefined,
    },
    {
      lat: 51.723858,
      lon: 7.895982,
      type: '3',
      base64: undefined,
    }
  ];
  constructor() { }

  swap() {
    console.log('swap');
    this.drawProfile = !this.drawProfile;
    // Need function call or doesn't re-render for some reason
    this.getIcon('1', 1);
  }
  getIcon(t, i) {
    if (this.drawProfile) {
      if (this.markers[i].base64) { return this.markers[i].base64; }
      let w = 300;
      let h = 300;
      let cr = new CanvasRenderer(w, h);
      cr.drawImage(this.url, 0.05);
      cr.drawProfile('https://upload.wikimedia.org/wikipedia/en/a/a3/DOG_Jimbo_Global.png',
        0.2, (w - 10 * 2 ) / 2, (w - 12.8 * 2) / 2
      ).then(base64 => this.markers[i].base64 = base64);
    } else {
      this.markers = this.markers.map(j => (j.base64 = undefined, j));
      return `assets/marker${t}.png`;
    }
  }
}
