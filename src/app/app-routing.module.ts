import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmetteurComponent } from './emetteur/emetteur.component';
import { MontantComponent } from './montant/montant.component';
import { RecepteurComponent } from './recepteur/recepteur.component';

const routes:Routes=[
  {path:'emetteur',component:EmetteurComponent},
  {path:'montant',component:MontantComponent},
  {path:'recepteur',component:RecepteurComponent},
  {path:'',redirectTo:'/emetteur',pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
