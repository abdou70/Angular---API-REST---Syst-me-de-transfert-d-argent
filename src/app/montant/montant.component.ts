import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmetteurService } from 'src/service/emetteur.service';
import { MontantService } from 'src/service/montant.service';
import { RecepteurService } from 'src/service/recepteur.service';

@Component({
  selector: 'app-montant',
  templateUrl: './montant.component.html',
  styleUrls: ['./montant.component.css']
})
export class MontantComponent implements OnInit {

  ListeRecepteur:any[]=[];
  ListeEmetteur:any[]=[];

  montant:any[]=[];
  montantbase={
   montant1:0,
   date:'',
   id_emetteur:0,
   id_recepteur:0
  };
  constructor(private montantService:MontantService
    ,private recepteurService:RecepteurService
    ,private emetteurService:EmetteurService) { 
    
  }

  ngOnInit(): void {
    this.recepteurService.getAllRecepteur().subscribe(
      (data:any)=>{
          this.ListeRecepteur = data;
          console.log(this.ListeRecepteur);
      }
    )
    this.emetteurService.getAllEmetteur().subscribe(
      (data:any)=>{
        this.ListeEmetteur = data;
        console.log(this.ListeEmetteur)
      }
    )
  }

  onAddMontant(p:NgForm){
   
    this.montantbase.montant1=p.value["montant"];
    this.montantbase.date=p.value["date"];
    this.montantbase.id_recepteur=p.value["id_recep"];
    this.montantbase.id_emetteur=p.value["id_emet"];
    // console.log(this.montantbase.date);
    // console.log(this.montantbase.id_emet);
    this.montantService.addTransfert(this.montantbase.montant1,this.montantbase.date,
      this.montantbase.id_recepteur,this.montantbase.id_emetteur).subscribe(
      
      (data) => {

        console.log(data);
      },
      (error) => {

        console.log(error);
       
      }
    );
    this.montantService.getAllTransfert().subscribe((data)=>{
      this.montant=data;
      console.log(data);
    })
    console.log(p);

  }

}
