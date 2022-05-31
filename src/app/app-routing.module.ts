import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieFormeComponent } from './components/categorie-forme/categorie-forme.component';
import { CategorieListeComponent } from './components/categorie-liste/categorie-liste.component';

const routes: Routes = [
  {path:"categorie-forme",component:CategorieFormeComponent},
  {path:"categorie-liste",component:CategorieListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
