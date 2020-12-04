import { HttpClient } from '@angular/common/http';
import{EmetteurService} from './emetteur.service'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Montant } from 'src/app/montant/montant';
@Injectable()
export class MontantService{


    constructor(public http:HttpClient){

    }


    //listemetteur:any[]=[];
    montant:any[]=[];

    addTransfert(montant:any,id_recept:number,id_emet:number,
        ):Observable<Montant>{
        return this.http.post<Montant>
        (`http://localhost:8080/Transfert/${id_recept}/save/${id_emet}/${montant}`,{});
    }
    getAllTransfert():Observable<any[]>{
        return this.http.get<any[]>("http://localhost:8080/Transfert/liste");
    }
 //  getAllEmetteur():Observable<any[]>{
    //   return this.http.get<any[]>("http://localhost:8080/Emetteur/liste");
   // }
  
}