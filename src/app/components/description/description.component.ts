import { Component,  } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  descriptionData: any;

  selectedTitle!: string;
  selectedImage!: string;
  selectedDescription!: string;
  selectedGeography!: string;
  selectedAttractions!: string;

  constructor(private dataSharingService: DataSharingService) {
    this.descriptionData = this.dataSharingService.getData();
    console.log(this.descriptionData);
  }
  

  ngOnInt() {

  }


  // ngOnInit() {

  // }
  
  // Mostrar la info en el template
    // this.selectedTitle = this.descriptionData.title;
    // this.selectedImage = markerData.image;
    // this.selectedDescription = markerData.description;
    // this.selectedGeography = markerData.geography;
    // this.selectedAttractions = markerData.attractions;
}
