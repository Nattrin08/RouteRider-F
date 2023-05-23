import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['././map-component.component.css']

})

export class MapComponentComponent implements AfterViewInit {

  constructor() {}

  @Output() markerClicked: EventEmitter<string> = new EventEmitter<string>();

  // ngOnInit() {
  //   this.initMap();
  // }

  map!: google.maps.Map;
  zoomLevels = {
  small: 6,
  medium: 8,
  large: 10
  };

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 5.9547, lng: -73.6728 }, // se utiliza a Barbosa para centrar el mapa y se vean los 3 marcadores
      zoom: this.getZoomLevel(),
    };

    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    const markers = [
      {
        title: 'Punta Gallinas',
        position: { lat: 12.4583, lng: -71.6606 },
        url: 'marker1'
      },
      {
        title: 'Desierto de la Tatacoa',
        position: { lat: 3.1639, lng: -75.1703 },
        url: 'marker2'
      },
      {
        title: 'Caño Cristales',
        position: { lat: 2.2236, lng: -73.7853 },
        url: 'marker3'
      }
    ];

    markers.forEach((marker) => {
      const newMarker = new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title,
        url: marker.url,
      });
      newMarker.addListener('click', () => {
        this.markerClicked.emit(marker.url);
      });
      // Agregar evento para mostrar el título al pasar el cursor sobre el marcador
      newMarker.addListener('mouseover', function() {
        const infowindow = new google.maps.InfoWindow({
          content: marker.title
        });
        infowindow.open(Map, newMarker);

        // Cerrar el cuadro de información al quitar el cursor del marcador
        newMarker.addListener('mouseout', function() {
          infowindow.close();
        });
      });
    });
  }
  getZoomLevel(): number {
    const windowWidth = window.innerWidth;
    if (windowWidth < 576) {
      return this.zoomLevels.small;
    } else if (windowWidth < 992) {
      return this.zoomLevels.medium;
    } else {
      return this.zoomLevels.large;
    }
  }
}



