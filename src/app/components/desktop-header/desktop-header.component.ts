import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.css']
})
export class DesktopHeaderComponent {
  //input ingreso de datos de un componente padre - el appcomponent es el padre
  @Input() ocultarLista = false;
  userName = 'Usuario';
}
