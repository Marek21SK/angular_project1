import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU {OSOBY, KNIHY,VYPOZICKY}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Úloha1 a Úloha2 a Úloha3 (Vytvorenie spoločného angular projektu.)';

  vypozicky: any = [];
  vypozicka = {id:" ", kniha:" ", pouzivatel:" "};

  menu = MENU;

  constructor(private router: Router){
  }

  nastaMenu(m: MENU){
    if (m == MENU.OSOBY){
      this.router.navigate(["/osoba"]);
    }
    if (m == MENU.KNIHY){
      this.router.navigate(["/kniha"]);
    }
  }
/**
  public pridaj(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

  public pridaj2(): void{
    this.knihy.push({id: this.kniha.id, nazov: this.kniha.nazov, autor: this.kniha.autor, dostupnost: this.kniha.dostupnost});
  }

  public  pridaj3(): void{
    this.vypozicky.push({id: this.vypozicka.id, kniha: this.vypozicka.kniha, pouzivatel: this.vypozicka.pouzivatel});
  }
*/

/**
  decimal = 0;
  n = 0;

  bits: boolean[] = [false, false, false, false, false, false, false, false];

  public transfertoBin(){
    let binary = ((this.decimal >>> 0).toString(2)).padStart(8, '0');
    for (let n=0;n< binary.length;n++){
      this.bits[7 - n] = n < binary.length && binary[n] == '1';
    }
  }
 */
}
