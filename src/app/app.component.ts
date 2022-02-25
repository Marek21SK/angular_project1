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
  n = 0;


  public transfertoBin(){
    this.bin = ((this.decimal >>> 0).toString(2));
    let o = this.bin.length;
    var pole:number[] = new Array(o);
    var pom_pole:number[] = new Array(o);
    let pom =1;
    for (let n=0;n<this.bin.length;n++){
      var st = this.bin;
      var sliced = st.slice(o-1,o);
      pole[n] = Number(sliced);
      pom_pole[o-1] = pole[n]
      o--;
    }
    alert(pom_pole);
  }

  public checkboxes(){
    let o = this.bin.length;
    var pole:number[] = new Array(o);
    let pom =1;
    for (let n=0;n<this.bin.length;n++){
      var st = this.bin;
      var sliced = st.slice(o-1,o);
      pole[n] = Number(sliced);
    }
    alert(pole)
    for (let n =0;n<this.bin.length;n++){
      let select = document.getElementById(String(pom));
      if (pole[o]==1){

      }
      pom++;
      o--;
    }
  }

}
