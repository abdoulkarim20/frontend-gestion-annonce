import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private host=environment.hostProduit;
  constructor(private http:HttpClient) { }

  //la creation d'un produit
  public createProduit(produit:Produit):Observable<any>{
    return this.http.post(`${this.host}/save`,produit)
    .pipe(
      catchError(this.handleError)
    )
  }

  //La recuperation de toutes les produits
  public getAllProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.host}/all`)
    .pipe(
      catchError(this.handleError)
    )
  }



  //la gestion des erreur.
  private handleError(error: HttpErrorResponse) {
    let messageError=''
    if (error.status === 0) {
      //errur coter client
      messageError=error.error.message;
    } else {
      //Erreur du backend
      // console.log(error.error.message)
      messageError=error.error.message
    }
    // Return return l'eurr sur l'interface utilisateur.
    
    return throwError(() => new Error(messageError));
  }
}
