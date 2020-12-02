import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmetteurComponent } from './emetteur/emetteur.component';
import { MontantComponent } from './montant/montant.component';
import { RecepteurComponent } from './recepteur/recepteur.component';
import { FormsModule } from '@angular/forms';
import { EmetteurService } from 'src/service/emetteur.service';
import { RecepteurService } from 'src/service/recepteur.service';
import { MontantService } from "src/service/montant.service";





@NgModule({
  declarations: [
    AppComponent,
    EmetteurComponent,
    MontantComponent,
    RecepteurComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [EmetteurService,RecepteurService,MontantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
