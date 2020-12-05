import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmetteurService } from 'src/service/emetteur.service';
import { Emetteur } from './emetteur';

@Component({
  selector: 'app-emetteur',
  templateUrl: './emetteur.component.html',
  styleUrls: ['./emetteur.component.css']
})
export class EmetteurComponent implements OnInit {

  listemetteur:any[]=[];
 
  emetteurbase={
  nom:'',
  prenom:'',
  telephone:'',
  cni:'',
  montant_envoyer:0
  };

  constructor(public http:HttpClient,private emetteurService:EmetteurService) { 

    //this.listemetteur=this.emetteurService.getAllEmetteur();
  }

  ngOnInit(): void {
    //.listemet()
     // .subscribe(data=> this.listemetteur = data);
     this.http.get<any[]>("http://localhost:8080/Emetteur/liste")
     .subscribe((data)=> {
       this.listemetteur = data;
       console.log(this.listemetteur);
      });
    // .map(resp=>resp.json())
     


  }

  //listemet():Observable<listemetteur[]>{
    
  onAddEmetteur(p:NgForm){
    this.emetteurbase.nom=p.value["nom"];
    this.emetteurbase.prenom=p.value["prenom"];
    this.emetteurbase.telephone=p.value["telephone"];
    this.emetteurbase.cni=p.value["cni"];
    this.emetteurbase.montant_envoyer=p.value["montant"];
    this.emetteurService.addEmetteur(this.emetteurbase).subscribe(
      
      (data) => {

        console.log(data);
      },
      (error) => {

        console.log(error);
       
      }
    );

    this.emetteurService.getAllEmetteur().subscribe((data)=>{
      this.listemetteur=data;
      console.log(data);
    })
    console.log(p);
  }

}
