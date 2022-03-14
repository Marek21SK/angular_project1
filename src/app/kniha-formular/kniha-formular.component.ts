import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent{

  @Input()
  set kniha(data: Kniha | undefined ){
    if (data){
      this.form.setValue(data);
    }
  }

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      autor: new FormControl(null),
      dostupnost: new FormControl(null)
    });
  }
  public zrus(): void {
    this.kniha = undefined;
    this.form.reset();
  }
}
