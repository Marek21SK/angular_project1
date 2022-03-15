export class Osoba{
  id?: string;
  meno: string;
  priezvisko: string;
  kontakt: string;

  constructor(osoba: Osoba){
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.kontakt = osoba.kontakt;
  }
}
