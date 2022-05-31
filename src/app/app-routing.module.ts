import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieFormeComponent } from './components/categorie-forme/categorie-forme.component';

const routes: Routes = [
  {path:"categorie-forme",component:CategorieFormeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
