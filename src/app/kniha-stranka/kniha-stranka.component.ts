import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Kniha} from "../models/kniha.model";
import {KnihaService} from "../../kniha.service";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent{

  knihy: Kniha[] = []

  knihaNaUpravu?: Kniha;

  constructor(private router: Router, private knihaService: KnihaService) { }

  ngOnInit(): void{
    this.refreshKniha();
  }

  refreshKniha(): void{
    this.knihaService.getKnihy().subscribe(data=>{
      console.log('prislo:', data);
      this.knihy = [];
      for (const d of data){
        this.knihy.push({ id: d.id, autor: d.autor, nazov: d.nazov, dostupnost: d.dostupnost});
      }
    });
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }

  pridaj(kniha: Kniha){
    //this.knihy.push(kniha);
    this.knihaService.createKniha(kniha).subscribe(data =>{
      console.log('prislo', data);
      this.refreshKniha()
    });
  }

  uprav(kniha: Kniha){
    //const index = this.knihy.findIndex(knihaArray => knihaArray.id === kniha.id);
    //if (index !== -1){
      //this.knihy[index] = kniha;
    this.knihaService.updateKniha(kniha.id, kniha).subscribe(data =>{
      console.log('upravene', kniha);
      this.refreshKniha()
    });
    }


  upravZoZoznamu(kniha: Kniha): void{
    this.knihaNaUpravu = kniha;
  }
  zmazZoZoznamu(kniha: Kniha): void{
    //const index = this.knihy.findIndex(knihaArray => knihaArray.id === kniha.id);
    //if (index !== -1) {
      //this.knihy.splice(index, 1);
    this.knihaService.deleteKniha(kniha.id).subscribe(data =>{
      console.log('vymazanie', data);
      this.refreshKniha()
  });
    }
}
