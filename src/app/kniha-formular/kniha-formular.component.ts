import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent{

  @Input()
  set kniha(data: Kniha | undefined ){
    if (data){
      this.vyplnForm(data);
    }
  }

  @Output()
  pridajKnihu = new EventEmitter<Kniha>();

  @Output()
  upravKnihu = new EventEmitter<Kniha>();

  @Output()
  zmazKnihu = new EventEmitter<Kniha>();


  form!: FormGroup;

  /**kniha: Kniha ={id:" ", nazov:" ", autor:" ", dostupnost:" "};
   */

  constructor() {
    this.vytvorform();
  }

  private vytvorform(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null, Validators.required),
      autor: new FormControl(null, Validators.required),
      dostupnost: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
  }
    /*
    this.form.setValue({
      id: kniha.id,
      nazov: kniha.nazov,
      autor: kniha.autor,
      dostupnost: kniha.dostupnost
    });

    this.form.patchValue({
      id: kniha.id,
      nazov: kniha.nazov,
      autor: kniha.autor,
      dostupnost: kniha.dostupnost
    });
    */

  private vyplnForm(kniha: Kniha): void{
    this.form.controls["id"].setValue(kniha.id);
    this.form.controls["autor"].setValue(kniha.autor);
    this.form.controls["nazov"].setValue(kniha.nazov);
    this.form.controls["dostuponst"].setValue(kniha.dostupnost);
  }

  public pridaj(): void{
    if (this.form.value){
    this.pridajKnihu.emit(this.form.value);
    this.form.reset();
    }
  }

  public uprav(): void{
    this.upravKnihu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
      this.form.reset();
    }
}
