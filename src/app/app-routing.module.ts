import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieDetailComponent } from './components/categorie-detail/categorie-detail.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';
import { CategorieFormeComponent } from './components/categorie-forme/categorie-forme.component';
import { CategorieListeComponent } from './components/categorie-liste/categorie-liste.component';
import { ListeProduitComponent } from './components/liste-produit/liste-produit.component';
import { ProduitFormulaireComponent } from './components/produit-formulaire/produit-formulaire.component';

const routes: Routes = [
  {path:"categorie-forme",component:CategorieFormeComponent},
  {path:"categorie-liste",component:CategorieListeComponent},
  {path:"edit-categore/:id",component:CategorieEditComponent},
  {path:"detail-categorie/:id",component:CategorieDetailComponent},
  {path:"produit-forme",component:ProduitFormulaireComponent},
  {path:"",component:ListeProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
