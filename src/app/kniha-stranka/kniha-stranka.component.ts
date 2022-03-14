import { Component } from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent {

  knihy: Kniha[] = [];

  zmazZoZoznamu(kniha: Kniha): void {
    const index = this.knihy.findIndex(knihaArray => knihaArray.id === kniha.id);
    if (index !== -1) {
      this.knihy.splice(index, 1);
    }
  }
}
