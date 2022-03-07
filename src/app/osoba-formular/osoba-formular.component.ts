import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent{

 @Output()
 pridajOsobu = new EventEmitter<Osoba>();

 @Output()
 upravOsobu = new EventEmitter<Osoba>();

  @Input()
  set osoba(o: Osoba){
    if(o){
    this.formular.setValue({
      id: o.id,
      meno: o.meno,
      priezvisko: o.priezvisko,
      kontakt: o.kontakt
    });
   }
  }
  //osoba: Osoba = {meno:" ", priezvisko: " ", kontakt:" "};

  formular: FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null),
      kontakt: new FormControl(null)
    });
  }

  public pridaj(): void{
    //this.pridajOsobu.emit(this.formular.value);
    this.pridajOsobu.emit(
    {id: Math.random().toString(),
      meno: this.formular.value.meno,
      priezvisko: this.formular.value.priezvisko,
      kontakt: this.formular.value.kontakt
    });
    this.formular.reset();
  }

  public uprav(): void{
    this.upravOsobu.emit(this.formular.value);
    // this.upravOsobu.emit({
    //   id: this.formular.value.id,
    //   meno: this.formular.value.meno,
    //   priezvisko: this.formular.value.priezvisko,
    //   kontakt: this.formular.value.kontakt
    // });
    this.formular.reset();
  }
}
