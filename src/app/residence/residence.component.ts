import { Component } from '@angular/core';
import { Appartment } from '../core/appartment';
import { Residence } from '../core/residence';


@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
  listResidences=[
    {id:1,"name": "Elfel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg"},
     {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/R4.jpg"}
   ];
   listApartments:Appartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
 
   ]
   selectedResidence: Residence | null = null;
  residenceApartments: Appartment[] = [];
  searchSurface: number | null = null;
  favoriteApartments: Appartment[] = [];

  constructor() { }

  showApartments(residence: Residence) {
    this.selectedResidence = residence;
    this.residenceApartments = this.listApartments.filter(apartment => apartment.residence.id === residence.id);
  }

  addToFavorites(apartment: Appartment) {
    this.favoriteApartments.push(apartment);
  }

  filterApartmentsBySurface() {
    if (this.searchSurface !== null) {
      const filteredApartments = this.listApartments.filter(apartment => apartment.surface === this.searchSurface);
      if (filteredApartments.length > 0) {
        this.residenceApartments = filteredApartments;
      } else {
        this.residenceApartments = [];
      }
    }
  }

}
