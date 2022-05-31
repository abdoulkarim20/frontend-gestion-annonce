import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieFormeComponent } from './components/categorie-forme/categorie-forme.component';
import { CategorieListeComponent } from './components/categorie-liste/categorie-liste.component';
import { CategorieDetailComponent } from './components/categorie-detail/categorie-detail.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieFormeComponent,
    CategorieListeComponent,
    CategorieDetailComponent,
    CategorieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
