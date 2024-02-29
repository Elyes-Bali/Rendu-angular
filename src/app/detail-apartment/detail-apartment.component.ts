import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appartment } from '../core/appartment';



@Component({
  selector: 'app-detail-apartment',
  templateUrl: './detail-apartment.component.html',
  styleUrls: ['./detail-apartment.component.css']
})
export class DetailApartmentComponent implements OnInit {
  apartment: Appartment; // Déclaration d'une variable de type Apartment

  constructor(private route: ActivatedRoute) {
    this.apartment = new Appartment(); // Initialisation de l'objet Apartment
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        const apartmentId = +id;
        if (!isNaN(apartmentId)) {
          this.getApartmentDetails(apartmentId);
        } else {
          console.error('Invalid apartment ID:', apartmentId);
        }
      } else {
        console.error('Apartment ID is null.');
      }
    });
  }
  
  getApartmentDetails(id: number) {
    
    this.apartment.appartNum = 101;
    this.apartment.floorNum = 5;
    this.apartment.surface = 100;
    this.apartment.terrace = 'Yes';
    this.apartment.surfaceTerrace = 20;
    this.apartment.category = 'Luxury';
    this.apartment.description = 'Spacious apartment with a beautiful view.';
    
  }
}
