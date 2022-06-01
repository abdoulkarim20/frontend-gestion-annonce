import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';
import { CategorieFormeComponent } from './components/categorie-forme/categorie-forme.component';
import { CategorieListeComponent } from './components/categorie-liste/categorie-liste.component';

const routes: Routes = [
  {path:"categorie-forme",component:CategorieFormeComponent},
  {path:"categorie-liste",component:CategorieListeComponent},
  {path:"edit-categore/:id",component:CategorieEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
