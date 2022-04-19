import { Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Kniha, KnihaZoznam} from "../models/kniha.model";
import {KnihaService} from "../../kniha.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent implements OnInit, OnDestroy{

  knihy: KnihaZoznam[] = []

  knihaNaUpravu?: Kniha;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private knihaService: KnihaService) { }

  ngOnInit(): void{
    this.refreshKniha();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshKniha(): void{
    this.subscription.add(this.knihaService.getKnihy().subscribe(data=>{
      console.log('prislo:', data);
      this.knihy = data;
    }));
  }

  chodSpat(): void{
    this.router.navigate(['']);
  }

  pridaj(kniha: Kniha): void{
    //this.knihy.push(kniha);
    this.subscription.add(this.knihaService.createKniha(kniha).subscribe(data =>{
      console.log('prislo', data);
      this.refreshKniha()
    }));
  }

  uprav(kniha: Kniha): void{
    if (kniha.id !== undefined){
      this.subscription.add(this.knihaService.updateKniha(kniha.id, kniha).subscribe(data =>{
        console.log('prislo', data);
        this.refreshKniha()
        }));
      }
    }

  upravZoZoznamu(knihaId: number): void{
    this.subscription.add(this.knihaService.getKniha(knihaId).subscribe(data =>{
      console.log('prislo', data);
      this.knihaNaUpravu = data;
    }));
  }
  zmazZoZoznamu(knihaId: number): void{
    if (confirm('Naozaj chcete zmazať knihu?')){
      this.subscription.add(this.knihaService.deleteKniha(knihaId).subscribe(data =>{
        this.refreshKniha()
      }));
    }
  }
}
