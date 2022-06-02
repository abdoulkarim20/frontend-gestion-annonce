import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<Categorie[]>(`${this.host}/categories`);
  }
  //creation d'une categorie.
  public createCategorie(categore:Categorie[]){
    return this.http.post(`${this.host}/categorie/save`,categore);
  }
  //supprimer une categorie
  public deleteCategorie(id:number){
    return this.http.delete(`${this.host}/categorie/delete/${id}`);
  }

  //recupere une categorie
  public getOnceCategorie(id:number):Observable<Categorie>{
    return this.http.get<Categorie>(`${this.host}/categorie/${id}`)
  }

  //modification a partir de l'id recuperer
  public updateCategorie(id:number,categore:Categorie[]){
    return this.http.put(`${this.host}/categorie/edit/${id}`,categore)
  }
}
