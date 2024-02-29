import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { HomeComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponentComponent } from './form-apartment-component/form-apartment-component.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    AppartmentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
   
    AddResidenceComponent,
    NotFoundComponent,
    DetailsResidenceComponent,

    FormResidenceComponent,
    FormApartmentComponentComponent,
    FormApartmentComponent,
    DetailApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
