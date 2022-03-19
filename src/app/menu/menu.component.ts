import { Component} from '@angular/core';
import{Router} from "@angular/router";

enum MENU {OSOBY, KNIHY,VYPOZICKY}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  title = 'Úloha1 a Úloha2 a Úloha3 a Úloha4 a Úloha5 (Vytvorenie spoločného angular projektu.)';

  menu = MENU;

  constructor(private router: Router){ }

  nastaMenu(m: MENU){
    if (m == MENU.OSOBY){
      this.router.navigate(["/osoba"]);
    }
    if (m == MENU.KNIHY){
      this.router.navigate(["/kniha"]);
    }
/**
    if(m == MENU.VYPOZICKY){
      this.router.navigate(["/vypozicka"]);
      }
 */
    }
}
