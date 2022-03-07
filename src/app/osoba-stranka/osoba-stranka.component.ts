import { Component} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent{

  constructor(){}

  osoby: Osoba[] = [];
  aktOsoba: Osoba = {id: " ", meno: " ", priezvisko: " ", kontakt: " "};

  pridaj(osoba: Osoba): void{
    this.osoby.push(osoba);
  }

  uprav(osoba: Osoba): void{
    const index = this.osoby.findIndex(osobaZPola => osobaZPola.id === osoba.id);
    if (index !== -1){
      this.osoby[index] = osoba;
    }
  }

  upravOsobuZoZoznamu(osoba: Osoba): void{
    this.aktOsoba = osoba;
  }
}
