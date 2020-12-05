export class Emetteur {

    nom : String;
    prenom : String;
    telephone :String;
    cni :String;
    montant_envoyer:number;

    constructor(nom : String, prenom:String,telephone:String,cni:String,montant_envoyer:number){
     
        this.nom=nom;
        this.prenom=prenom;
        this.telephone=telephone;
        this.cni=cni;
        this.montant_envoyer=montant_envoyer;
    }
}

