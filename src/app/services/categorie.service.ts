import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private host=environment.hostCategorie;
  constructor(private http:HttpClient) { }
  //toutes les categories
  getAllCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.host}/all`)
    .pipe(
      catchError(this.handleError)
    );
  }
  //creation d'une categorie.
  public createCategorie(categore:Categorie[]):Observable<any>{
    return this.http.post(`${this.host}/save`,categore)
      .pipe(
        catchError(this.handleError)
      )
  }
  //supprimer une categorie
  public deleteCategorie(id:number):Observable<any>{
    return this.http.delete(`${this.host}/delete/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //recupere une categorie
  public getOnceCategorie(id:number):Observable<Categorie>{
    return this.http.get<Categorie>(`${this.host}/get/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  //modification a partir de l'id recuperer
  public updateCategorie(id:number,categore:Categorie[]):Observable<any>{
    return this.http.put(`${this.host}/edit/${id}`,categore)
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
