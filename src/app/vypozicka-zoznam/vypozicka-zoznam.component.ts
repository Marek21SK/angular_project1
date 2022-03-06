import { Component} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicka-zoznam',
  templateUrl: './vypozicka-zoznam.component.html',
  styleUrls: ['./vypozicka-zoznam.component.css']
})
export class VypozickaZoznamComponent {
  vypozicky: Vypozicka[] = []

  constructor() { }

}
