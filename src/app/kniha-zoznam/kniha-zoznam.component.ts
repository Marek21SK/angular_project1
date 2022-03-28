import { Component, EventEmitter, Input, Output} from '@angular/core';
import {KnihaZoznam} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-zoznam',
  templateUrl: './kniha-zoznam.component.html',
  styleUrls: ['./kniha-zoznam.component.css']
})
export class KnihaZoznamComponent{

  @Input()
  knihy: KnihaZoznam[] = [];

  @Output()
  upravKnihu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazKnihu: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  uprav(knihaId: number): void{
    this.upravKnihu.emit(knihaId);
  }

  zmaz(knihaId: number): void{
    this.zmazKnihu.emit(knihaId);
  }
}
