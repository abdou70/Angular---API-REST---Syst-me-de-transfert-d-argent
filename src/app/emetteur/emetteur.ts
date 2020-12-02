export class Emetteur {

    nom : String;
    prenom : String;
    telephone :String;
    cni :String;
    montant:number;

    constructor(nom : String, prenom:String,telephone:String,cni:String,montant:number){
     
        this.nom=nom;
        this.prenom=prenom;
        this.telephone=telephone;
        this.cni=cni;
        this.montant=montant;
    }
}

