import {RouterModule, Routes} from "@angular/router";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";
import {NgModule} from "@angular/core";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes =[
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'kniha',
    component: KnihaStrankaComponent
  },
  /*
  {
    path: 'vypozicka',
    component: VypozickaStrankaComponent
  },
  */
  {
    path: '',
    component: MenuComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
