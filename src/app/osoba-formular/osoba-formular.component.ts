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
      this.form.setValue(data);
    }
  }

 @Output()
 pridajOsobu = new EventEmitter<Osoba>();

 @Output()
 upravOsobu = new EventEmitter<Osoba>();

  //osoba: Osoba = {meno:" ", priezvisko: " ", kontakt:" "};

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null),
      kontakt: new FormControl(null)
    });
  }

  public pridaj(){
    //this.pridajOsobu.emit(this.form.value);
    this.pridajOsobu.emit({id: Math.random().toString(), meno: this.form.value.meno, priezvisko: this.form.value.priezvisko, kontakt: this.form.value.kontakt});
    this.form.reset();
  }

  public uprav(){
    this.upravOsobu.emit(this.form.value);
    // this.upravOsobu.emit({
    //   id: this.formular.value.id,
    //   meno: this.formular.value.meno,
    //   priezvisko: this.formular.value.priezvisko,
    //   kontakt: this.formular.value.kontakt
    // });
    this.form.reset();
  }

  public zrus(){
    this.osoba = undefined;
    this.form.reset();
  }
}
