import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent{

  @Input()
  set osoba(data: Osoba | undefined){
    if (data){
      this.vyplnForm(data);
    }
  }

 @Output()
 pridajOsobu = new EventEmitter<Osoba>();

 @Output()
 upravOsobu = new EventEmitter<Osoba>();

 @Output()
 zmazOsobu = new EventEmitter<Osoba>();

  //osoba: Osoba = {meno:" ", priezvisko: " ", kontakt:" "};

  form!: FormGroup;

  constructor() {
    this.vytvorForm();
  }

  private vytvorForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null),
      kontakt: new FormControl(null)
    });
  }

  private vyplnForm(osoba: Osoba): void{
    this.form.controls["id"].setValue(osoba.id);
    this.form.controls["meno"].setValue(osoba.meno);
    this.form.controls["priezvisko"].setValue(osoba.priezvisko);
    this.form.controls["kontakt"].setValue(osoba.kontakt);
  }

  public pridaj(): void{
    //this.pridajOsobu.emit(this.form.value);
    this.pridajOsobu.emit({id: Math.random(), meno: this.form.value.meno, priezvisko: this.form.value.priezvisko, kontakt: this.form.value.kontakt});
    this.form.reset();
  }

  public uprav(): void {
    this.upravOsobu.emit(this.form.value);
    this.form.reset();
    // this.upravOsobu.emit({
    //   id: this.formular.value.id,
    //   meno: this.formular.value.meno,
    //   priezvisko: this.formular.value.priezvisko,
    //   kontakt: this.formular.value.kontakt
    // });
    }

    public zrus(): void{
    this.osoba = undefined;
    this.form.reset();
  }
}
