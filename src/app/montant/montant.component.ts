import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MontantService } from 'src/service/montant.service';

@Component({
  selector: 'app-montant',
  templateUrl: './montant.component.html',
  styleUrls: ['./montant.component.css']
})
export class MontantComponent implements OnInit {


  montant:any[]=[];
  montantbase={
   montant1:'',
   id_emetteur:'',
   id_recepteur:''
  };
  constructor(private montantService:MontantService) { 
    this.montant=this.montantService.getAllMontant();
  }

  ngOnInit(): void {
  }

  onAddMontant(p:NgForm){
    this.montantService.addMontant(p);
    this.montantbase.montant1="";
    this.montantbase.id_emetteur="";
    this.montantbase.id_recepteur=""

  }

}
