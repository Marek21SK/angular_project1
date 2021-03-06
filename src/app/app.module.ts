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
import { VypozickaFormularComponent } from './vypozicka-formular/vypozicka-formular.component';
import { VypozickaStrankaComponent } from './vypozicka-stranka/vypozicka-stranka.component';
import { VypozickaZoznamComponent } from './vypozicka-zoznam/vypozicka-zoznam.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {SelectButtonModule} from "primeng/selectbutton";

@NgModule({
  declarations: [
    AppComponent,
    KnihaFormularComponent,
    KnihaStrankaComponent,
    KnihaZoznamComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobaZoznamComponent,
    VypozickaFormularComponent,
    VypozickaStrankaComponent,
    VypozickaZoznamComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
    TableModule,
    SelectButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
