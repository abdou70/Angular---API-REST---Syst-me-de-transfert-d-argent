import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import {Emetteur} from './emetteur';
import { map } from 'rxjs/operators';
import { Emetteur } from 'src/app/emetteur/emetteur';
@Injectable()
export class EmetteurService{

  constructor(public http:HttpClient){

  }
    listemetteur:any[]=[];

    addEmetteur(emetteur: Emetteur):Observable<Emetteur>{
        return this.http.post<Emetteur>("http://localhost:8080/Emetteur/save",emetteur);
        
    }

    getAllEmetteur():Observable<any[]>{
        return this.http.get<any[]>("http://localhost:8080/Emetteur/liste");
    }

    
}