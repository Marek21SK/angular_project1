import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import { KnihaStrankaComponent } from './kniha-stranka/kniha-stranka.component';
import { KnihaZoznamComponent } from './kniha-zoznam/kniha-zoznam.component';
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { OsobaZoznamComponent } from './osoba-zoznam/osoba-zoznam.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    KnihaFormularComponent,
    KnihaStrankaComponent,
    KnihaZoznamComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobaZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
