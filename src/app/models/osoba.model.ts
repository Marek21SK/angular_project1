export class Osoba{

  id?: string;
  meno: string;
  priezvisko: string;
  kontakt: string;

  constructor(id: string, meno: string, priezvisko: string, kontakt: string){
    this.id = id;
    this.meno = meno;
    this.priezvisko = priezvisko;
    this.kontakt = kontakt;
  }
}
