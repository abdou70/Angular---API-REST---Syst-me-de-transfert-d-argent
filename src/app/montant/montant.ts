export class Montant {

    montant1:number;
    date:String;
    id_emetteur:number;
    id_recepteur:number

    constructor(montant1:number,date:String,id_emetteur:number,id_recepteur:number){

        this.montant1=montant1;
        this.date=date;
        this.id_emetteur=id_emetteur;
        this.id_recepteur=id_recepteur;


    }
}
