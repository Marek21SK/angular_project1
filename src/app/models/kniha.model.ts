export class Kniha{
  id: string;
  autor: string;
  nazov: string;
  dostupnost: string;


  constructor(kniha: Kniha){
    this.id = kniha.id;
    this.autor = kniha.autor;
    this.nazov = kniha.nazov;
    this.dostupnost = kniha.dostupnost;
  }
}
