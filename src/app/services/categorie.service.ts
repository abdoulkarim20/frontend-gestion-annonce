import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl="http://localhost:8080/categorie/api"; 

  constructor(private http:HttpClient) { }
  //toutes les categories
  getAllCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiUrl}/categories`);
  }
  //creation d'une categorie.
  public createCategorie(categore:any){
    return this.http.post(`${this.apiUrl}/categorie/save`,categore);
  }
}
