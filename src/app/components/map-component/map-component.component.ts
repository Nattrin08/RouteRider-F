import { Component, OnInit, Output, EventEmitter } from '@angular/core';


declare const google: any;

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['././map-component.component.css']

})

export class MapComponentComponent implements OnInit {
  constructor() {}
  @Output() markerClicked: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const colombia = { lat: 5.9547, lng: -73.6728 }; // se utiliza a Barbosa para centrar el mapa y se vean los 3 marcadores
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: colombia
    });

    const markers = [
      {
        title: 'Punta Gallinas',
        position: { lat: 12.4583, lng: -71.6606 },
      },
      {
        title: 'Desierto de la Tatacoa',
        position: { lat: 3.1639, lng: -75.1703 },
      },
      {
        title: 'Caño Cristales',
        position: { lat: 2.2236, lng: -73.7853 },
      }
    ];

    markers.forEach((marker, index) => {
      const newMarker = new google.maps.Marker({
        position: marker.position,
        map: map,
        title: marker.title
      });

      newMarker.addListener('click', () => {
        this.markerClicked.emit(index);
      });
      // Agregar evento para mostrar el título al pasar el cursor sobre el marcador
      newMarker.addListener('mouseover', function() {
        const infowindow = new google.maps.InfoWindow({
          content: marker.title
        });
        infowindow.open(map, newMarker);

        // Cerrar el cuadro de información al quitar el cursor del marcador
        newMarker.addListener('mouseout', function() {
          infowindow.close();
        });
      });
    });
  }
}



