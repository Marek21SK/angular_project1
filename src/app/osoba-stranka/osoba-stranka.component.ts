import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent{

  osoby: Osoba[] = []

  osobaNaUpravu?: Osoba;

  constructor(private router: Router) { }

  chodSpat(): void{
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba){
    this.osoby.push(osoba);
  }

  uprav(osoba: Osoba){
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1){
      this.osoby[index] = osoba;
    }
  }

  upravZoZoznamu(osoba: Osoba): void{
    this.osobaNaUpravu = osoba;
  }
  zmazZoZoznamu(osoba: Osoba): void{
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1) {
      this.osoby.splice(index, 1);
    }
  }
}
