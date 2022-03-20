export class Osoba{
  id: number;
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
export class OsobaZoznam{
  id: number;
  meno: string;
  priezvisko: string;
  kontakt: string;

  constructor(osoba: OsobaZoznam) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.kontakt = osoba.kontakt;
  }
}
