import { Component } from '@angular/core';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {
  apartment: any = {}; // Define an object to hold the form data

  constructor() { }

  // Method to handle form submission
  onSubmit() {
    // Here you can handle the form submission logic
    console.log(this.apartment); 
  }
}
