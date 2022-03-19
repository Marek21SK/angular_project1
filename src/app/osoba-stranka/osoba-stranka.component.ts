import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Osoba} from "../models/osoba.model";
import {OsobaService} from "../../osoba.service";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent implements OnInit{

  osoby: Osoba[] = [];

  osobaNaUpravu?: Osoba;
  //aktOsoba: Osoba = {id: " ", meno: " ", priezvisko: " ", kontakt: " "};

  constructor(private router: Router, private osobaService: OsobaService){}
  //`
  ngOnInit(): void {
    this.refreshOsob();
  }

  refreshOsob(): void{
    this.osobaService.getOsoby().subscribe(data =>{
      console.log('prislo:', data);
      this.osoby = [];
      for (const d of data){
        this.osoby.push({ id: d.id, meno: d.meno, priezvisko: d.priezvisko, kontakt: d.kontakt});
      }
    });
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba): void{
    // this.osoby.push(osoba);
    this.osobaService.createOsoba(osoba).subscribe(data => {
      console.log('prislo', data);
      this.refreshOsob()
    });
  }

  uprav(osoba: Osoba): void{
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1){
      this.osoby[index] = osoba;
    }
  }

  upravZoZoznamu(osoba: Osoba): void{
    this.osobaNaUpravu = osoba;
  }

  zmazZoZoznamu(osoba: Osoba): void {
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1){
      this.osoby.splice(index, 1);
    }
    //this.aktOsoba = osoba;
  }
}
