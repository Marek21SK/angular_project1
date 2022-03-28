import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OsobaZoznam} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-zoznam',
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css']
})
export class OsobaZoznamComponent{

  @Input()
  osoby: OsobaZoznam[] = []

  @Output()
  upravOsobu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazOsobu: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  uprav(osobaId: number): void{
    this.upravOsobu.emit(osobaId);
  }

  zmaz(osobaId: number): void{
    this.zmazOsobu.emit(osobaId);
  }
}
