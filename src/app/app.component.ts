import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Úloha1 (Vytvorenie spolocneho angular projektu)';
  bin = " ";
  decimal = 0;


  public transfertoBin(){
    this.bin = ((this.decimal >>> 0).toString(2))
  }

}
