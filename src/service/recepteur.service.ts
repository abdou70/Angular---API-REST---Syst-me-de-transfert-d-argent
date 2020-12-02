import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recepteur } from 'src/app/recepteur/recepteur';
@Injectable()
export class RecepteurService{
    constructor(public http:HttpClient){

    }
     


    listerecepteur:any[]=[];

    addRecepteur(recepteur: Recepteur):Observable<Recepteur>{
        return this.http.post<Recepteur>("http://localhost:8080/Recepteur/save",recepteur);
    }
    getAllRecepteur():Observable<any[]>{
        return this.http.get<any[]>("http://localhost:8080/Recepteur/liste");
    }
}