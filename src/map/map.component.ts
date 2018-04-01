import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations: [
    trigger('mapSize', [
      state('false', style({ height: '90vh'})),
      state('true', style({height: '50vh'})),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out'))
    ])
  ]
})
export class MapComponent implements OnInit {
  selected = undefined;
  large = false;
  coords = {
    lon: 7.815982,
    lat: 51.673858,
  };
  markers = [
    {
      lat: 51.673858,
      lon: 7.815982,
      id: 1,
      type: 'a',
    },
    {
      lat: 51.373858,
      lon: 7.215982,
      id: 2,
      type: 'b',
    },
    {
      lat: 51.723858,
      lon: 7.895982,
      id: 3,
      type: 'b',
    },
    {
      lat: 51.623858,
      lon: 7.995982,
      id: 1,
      type: 'b',
    },
    {
      lat: 51.523858,
      lon: 7.835982,
      id: 2,
      type: 'b',
    },
    {
      lat: 51.523858,
      lon: 7.495982,
      id: 4,
      type: 'b',
    },
    {
      lat: 51.623858,
      lon: 7.855982,
      id: 4,
      type: 'b',
    },
    {
      lat: 51.523858,
      lon: 7.795982,
      id: 5,
      type: 'a',
    },
    {
      lat: 51.573858,
      lon: 7.695982,
      id: 5,
      type: 'b',
    },
    {
      lat: 51.843858,
      lon: 7.955982,
      id: 6,
      type: 'a',
    },
    {
      lat: 50.723858,
      lon: 7.695982,
      id: 7,
      type: 'b',
    }
  ];
  employees = [
    {
      name: 'Bobby Bob',
      id: 1,
      city: 'Town',
      color: 'Blue'
    },
    {
      name: 'Tina Turner',
      id: 2,
      city: 'Country',
      color: 'Green'
    },
    {
      name: 'Todd Terje',
      id: 3,
      city: 'Village',
      color: 'Red'
    },
    {
      name: 'Mike Milligah',
      id: 4,
      city: 'Park',
      color: 'Orange'
    },
    {
      name: 'Georgie Porgie',
      id: 5,
      city: 'City State',
      color: 'turquoise'
    },
    {
      name: 'Lina Looper',
      id: 6,
      city: 'Tribe',
      color: 'navy'
    },
    {
      name: 'Yuna Yoohoo',
      id: 7,
      city: 'Continent',
      color: 'emerald'
    }
  ]
  constructor() { }
  getMarker({id, type}) {
    if (id == this.selected) {
      return `assets/marker1${type}.png`;
    } else {
      return `assets/marker2${type}.png`;
    }
  }
  ngOnInit() {
  }

}
