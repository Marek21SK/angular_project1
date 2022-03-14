import { Component } from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent {

  knihy: Kniha[] = []

  zmazZoZoznamu(kniha: Kniha): void{
    const index = this.knihy.findIndex(knihaArray => knihaArray.id === kniha.id);
    if (index !== -1) {
      this.knihy.splice(index, 1);
    }
  }
}
