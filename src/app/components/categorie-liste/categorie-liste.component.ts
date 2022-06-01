import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-liste',
  templateUrl: './categorie-liste.component.html',
  styleUrls: ['./categorie-liste.component.css']
})
export class CategorieListeComponent implements OnInit {
  categorie!:Categorie[]
  message:boolean=false

  constructor(private categorieService:CategorieService) { }

  ngOnInit() {
    this.getAllCategorie();
  }
  private getAllCategorie(){
    this.categorieService.getAllCategories().subscribe(data=>{
      this.categorie=data;
    })
  }
  //suppression de categorie
  deleteCategorie(id:number){
    let confirmation=confirm("Est-vous sur de vouloir supprimer ?"+id)
    if(confirmation==false)return;
    // this.categorie.splice(id,1)
    this.categorieService.deleteCategorie(id).subscribe((data)=>{
      this.message=true;
      this.ngOnInit();
    });
  }
  //modification de categore
  editeCategorie(id:number){
    alert("l'id a modifier est "+id)
  }
  //detail categorie
  detailCategrie(id:Number){
    alert("le detail de la categorie dont l'id est "+id)
  }
  //suppression de message de confirmation
  removeMessage(){
    this.message=false;
  }

}
