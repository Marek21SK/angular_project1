import { Component } from '@angular/core';

enum MENU {OSOBY, KNIHY,VYPOZICKY}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Úloha1 a Úloha2 (Vytvorenie spoločného angular projektu.)';

  osoby: any = [];
  osoba = {id:" ", meno:" ", kontakt:" "};

  knihy: any = [];
  kniha = {id:" ", nazov:" ", autor:" ", dostupnost:" "};

  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;

  nastaMenu(m: MENU){
    this.aktMenu = m;
  }

  public pridaj(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

  public pridaj2(): void{
    this.knihy.push({id: this.kniha.id, nazov: this.kniha.nazov, autor: this.kniha.autor, dostupnost: this.kniha.dostupnost});
  }

  decimal = 0;
  n = 0;

  bits: boolean[] = [false, false, false, false, false, false, false, false];

  public transfertoBin(){
    let binary = ((this.decimal >>> 0).toString(2)).padStart(8, '0');
    for (let n=0;n< binary.length;n++){
      this.bits[7 - n] = n < binary.length && binary[n] == '1';
    }
  }
}
