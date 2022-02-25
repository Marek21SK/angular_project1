import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Úloha1 (Vytvorenie spolocneho angular projektu)';
  decimal = 0;
  n = 0;

  bits: boolean[] = [false, false, false, false, false, false, false, false];

  public transfertoBin(){
    let binary = ((this.decimal >>> 0).toString(2)).padStart(8, '0');
    for (let n=0;n< binary.length;n++){
      this.bits[7 - n] = n < binary.length && binary[n] == '1';
    }
  }
}
