export class Recepteur {
    nom:String;
    prenom:String;
    telephone:String;
    cni:String;
    montant_recu:number;

    constructor(nom:String,prenom:String,telephone:String,cni:String,
        montant_recu:number){

        this.nom=nom;
        this.prenom=prenom;
        this.telephone=telephone;
        this.cni=cni;
        this.montant_recu=montant_recu;

    }
}
