import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-liste',
  templateUrl: './categorie-liste.component.html',
  styleUrls: ['./categorie-liste.component.css']
})
export class CategorieListeComponent implements OnInit {
  categories!:Categorie[]
  message:boolean=false
  errorMessage!:''
  //Pour la pagination
  page:number=1;
  count:number=0;
  tableSize:number=2;
  tableSizes!:[3,5];

  constructor(private categorieService:CategorieService) { }

  ngOnInit() {
    this.getAllCategorie();
  }
  private getAllCategorie(){
    this.categorieService.getAllCategories().subscribe(data=>{
      this.categories=data;
    },(error)=>{
      this.errorMessage=error
      
    })
  }

  //pour faire la pagination
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllCategorie();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllCategorie();
  }



  //suppression de categorie
  deleteCategorie(id:number){
    let confirmation=confirm("La suppression d'une categorie est irreversible etes-vous sur ?")
    if(confirmation==false)return;
    // this.categorie.splice(id,1)
    this.categorieService.deleteCategorie(id).subscribe((data)=>{
      this.message=true;
      this.ngOnInit();
    },(error)=>{
      this.errorMessage=error;
      
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
