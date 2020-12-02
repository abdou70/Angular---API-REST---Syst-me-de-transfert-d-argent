import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RecepteurService } from 'src/service/recepteur.service';

@Component({
  selector: 'app-recepteur',
  templateUrl: './recepteur.component.html',
  styleUrls: ['./recepteur.component.css']
})
export class RecepteurComponent implements OnInit {


  listerecepteur:any[]=[];

  recepteurbase={
    nom:'',
    prenom:'',
    telephone:'',
    cni:'',
    montant:0
  }

  constructor(public http:HttpClient,private recepteurService:RecepteurService) { 

   // this.recepteur=this.recepteurService.getAllRecepteur();
  }

  ngOnInit(): void {

    this.http.get<any[]>("http://localhost:8080/Recepteur/liste")
    .subscribe((data)=> {
      this.listerecepteur = data;
      console.log(this.listerecepteur);
     });
  }


  onAddRecepteur(p:NgForm){
    this.recepteurbase.nom=p.value["nom"];
    this.recepteurbase.prenom=p.value["prenom"];
    this.recepteurbase.telephone=p.value["telephone"];
    this.recepteurbase.cni=p.value["cni"];
    this.recepteurbase.montant=p.value["montant"];
    this.recepteurService.addRecepteur(this.recepteurbase).subscribe(
      (data) => {

      console.log(data);
    },
    (error) => {

      console.log(error);
     
    }
  );
    this.recepteurService.getAllRecepteur().subscribe((data)=>{
      this.listerecepteur=data;
      console.log(data);
    })
    console.log(p);
  }
}
