export class Osoba{
  meno: string;
  priezvisko: string;
  kontakt: string;

  constructor(osoba: Osoba){
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.kontakt = osoba.kontakt;
  }
}
