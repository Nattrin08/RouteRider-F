import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public descriptionData: any;

  setData(descriptionData: any) {
    this.descriptionData = descriptionData;
  }

  getData() {
    return this.descriptionData;
  }
}
