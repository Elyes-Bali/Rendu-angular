import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from '../core/residence';


@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
  residence: Residence = new Residence();

  constructor(private router: Router) {}

  submitForm() {
    // Assuming you have a service to add the residence, you can call it here

    this.router.navigate(['/residences']);
  }
}
