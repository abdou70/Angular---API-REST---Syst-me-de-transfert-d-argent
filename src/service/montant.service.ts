import { Injectable } from '@angular/core';
@Injectable()
export class MontantService{


    montant:any[]=[];

    addMontant(c:any){
        this.montant.push(c);
    }
    getAllMontant(){
        return this.montant;
    }
}