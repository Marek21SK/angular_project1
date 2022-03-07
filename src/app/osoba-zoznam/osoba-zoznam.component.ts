import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-zoznam',
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css']
})
export class OsobaZoznamComponent{

  @Input()
  osoby: Osoba[] = []

  @Output()
  upravOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  constructor() { }

  uprav(osoba: Osoba): void{
    this.upravOsobu.emit(osoba);
  }
}
