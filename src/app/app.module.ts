import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieFormeComponent } from './components/categorie-forme/categorie-forme.component';
import { CategorieListeComponent } from './components/categorie-liste/categorie-liste.component';
import { CategorieDetailComponent } from './components/categorie-detail/categorie-detail.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProduitFormulaireComponent } from './components/produit-formulaire/produit-formulaire.component';
import { ListeProduitComponent } from './components/liste-produit/liste-produit.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieFormeComponent,
    CategorieListeComponent,
    CategorieDetailComponent,
    CategorieEditComponent,
    ProduitFormulaireComponent,
    ListeProduitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
