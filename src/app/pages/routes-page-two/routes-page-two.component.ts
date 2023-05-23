import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-page-two',
  templateUrl: './routes-page-two.component.html',
  styleUrls: ['./routes-page-two.component.css'],
})
export class RoutesPageTwoComponent {
  constructor(private router: Router) {}

  selectedMarkerImage: string = '';
  selectedMarkerParagraph: string = '';

  tatacoaRedirection() {
    this.router.navigate(['/routes/desierto-tatacoa']);
  }

  handleMarkerClick(id: string) {
    if (id === 'marker1') {
      this.selectedMarkerImage = '';
      this.selectedMarkerParagraph = 'Texto del marcador 1.';
    } else if (id === 'marker2') {
      this.selectedMarkerImage = '/assets/img/tatacoa.jpg';
      this.selectedMarkerParagraph =
        'El Desierto de la Tatacoa es considerado como uno de los principales atractivos ambientales y turísticos del departamento del Huila, donde los procesos de erosión, las plantas de cactus y arbustos espinosos, las condiciones extremas del clima, y los hallazgos fósiles, llaman la atención de visitantes interesados en la apreciación de la naturaleza. Es la segunda zona árida más extensa de Colombia después de la Península de La Guajira. "La Tatacoa", no es justamente un desierto, sino un bosque seco tropical.';
    } else if (id === 'marker3') {
      this.selectedMarkerImage = 'ruta-a-imagen3.jpg';
      this.selectedMarkerParagraph = 'Texto del marcador 3.';
    }
  }
}
