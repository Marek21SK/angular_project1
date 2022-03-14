import {Kniha} from "../models/kniha.model";
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-kniha-zoznam',
  templateUrl: './kniha-zoznam.component.html',
  styleUrls: ['./kniha-zoznam.component.css']
})
export class KnihaZoznamComponent{

  @Input()
  knihy: Kniha[] = [];

  @Output()
  zmazKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();

  constructor() { }

  zmaz(kniha: Kniha): void{
    this.zmazKnihu.emit(kniha);
  }
}
