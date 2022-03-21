export class Kniha{
  id: number;
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
export class KnihaZoznam{
  id: number;
  autor: string;
  nazov: string;
  dostupnost: string;


  constructor(kniha: KnihaZoznam){
    this.id = kniha.id;
    this.autor = kniha.autor;
    this.nazov = kniha.nazov;
    this.dostupnost = kniha.dostupnost;
  }
}
