import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/residence';
import { Appartment } from '../core/appartment';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css'],
})
export class AppartmentComponent {
  listResidences: Residence[] = [
    {
      id:1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpeg',
    },
    {
      id:2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/images/R4.jpg',
    },
  ];

  listApartments: Appartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'Appartement S+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'Appartement S+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'Appartement S+3',
      residence: this.listResidences[1],
    },
    {
      id: 4,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'Appartement S+3',
      residence: this.listResidences[1],
    },
  ];

  constructor(private actR: ActivatedRoute) {}

  idResidence!: number;

  ngOnInit() {
    console.log('Route Snapshot:', this.actR.snapshot);
    this.idResidence = this.actR.snapshot.params['id'];
    this.listApartments = this.getApartments(); 
    this.listApartments = this.getApartmentsByResidence();
  }
  getApartments(): any[] {
    // get the listApartments data from an API or a service
    return [    { apartmentId: 1, residence: { id: 1 } },    { apartmentId: 2, residence: { id: 2 } },    { apartmentId: 3, residence: { id: 1 } }  ];
  }
  getApartmentsByResidence() {
    console.log('Residence ID:', this.idResidence);
    console.log('All Apartments:', this.listApartments);
    console.log('All Apartments:', this.listApartments);
    
    const filteredApartments = this.listApartments.filter(
      (app) => app.residence.id === this.idResidence
    );
    
    console.log('Filtered Apartments:', filteredApartments);
    
    return filteredApartments;
  }
  
  
  
  
}