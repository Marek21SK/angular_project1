import {Component, OnDestroy, OnInit} from '@angular/core';
import {Osoba, OsobaZoznam} from "../models/osoba.model";
import {Router} from "@angular/router";
import {OsobaService} from "../../osoba.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent implements OnInit, OnDestroy{

  osoby: OsobaZoznam[] = [];

  osobaNaUpravu?: Osoba;

  private subscription: Subscription = new Subscription();
  //aktOsoba: Osoba = {id: " ", meno: " ", priezvisko: " ", kontakt: " "};

  constructor(private router: Router, private osobaService: OsobaService){}
  //`
  ngOnInit(): void {
    this.refreshOsob();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshOsob(): void{
    this.subscription.add(this.osobaService.getOsoby().subscribe(data =>{
      console.log('prislo:', data);
      this.osoby = data;
    }));
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba): void{
    // this.osoby.push(osoba);
    this.subscription.add(this.osobaService.createOsoba(osoba).subscribe(data => {
      console.log('prislo', data);
      this.refreshOsob()
    }));
  }

  uprav(osoba: Osoba): void{
    if (osoba.id !== undefined) {
      this.subscription.add(this.osobaService.updateOsoba(osoba.id, osoba).subscribe(data => {
        console.log('prislo', data);
        this.refreshOsob()
      }));
    }
  }

  upravOsobuZoZoznamu(osobaId: number): void{
    this.subscription.add(this.osobaService.getOsoba(osobaId).subscribe(data => {
      console.log('prislo', data);
      this.osobaNaUpravu = data;
    }));
    }

  zmazOsobuZoZozanmu(osobaId: number): void {
    if (confirm('Naozaj chcete zmazat?')){
      this.subscription.add(this.osobaService.deleteOsoba(osobaId).subscribe(data => {
      this.refreshOsob();
    }));
    }
    //this.aktOsoba = osoba;
  }
}
