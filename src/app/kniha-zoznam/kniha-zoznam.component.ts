import { Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-zoznam',
  templateUrl: './kniha-zoznam.component.html',
  styleUrls: ['./kniha-zoznam.component.css']
})
export class KnihaZoznamComponent{

  @Input()
  knihy: Kniha[] = [];

  @Output()
  upravKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();

  @Output()
  zmazKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();

  constructor() { }

  uprav(kniha: Kniha): void{
    this.upravKnihu.emit(kniha);
  }

  zmaz(kniha: Kniha): void{
    this.zmazKnihu.emit(kniha);
  }
}
