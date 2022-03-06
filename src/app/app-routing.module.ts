import {RouterModule, Routes} from "@angular/router";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";
import {NgModule} from "@angular/core";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {VypozickaStrankaComponent} from "./vypozicka-stranka/vypozicka-stranka.component";

const routes: Routes =[
  {
    path: "osoba",
    component: OsobaStrankaComponent
  },
  {
    path: "kniha",
    component: KnihaStrankaComponent
  },
  {
    path: "vypozicka",
    component: VypozickaStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
