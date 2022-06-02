import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.css']
})
export class CategorieDetailComponent implements OnInit {
  id!:number;
  categore!:Categorie
  constructor(private categorieService:CategorieService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
    this.getCategorie(this.id)
  }
  getCategorie(id:number){
    this.categorieService.getOnceCategorie(this.id).subscribe((data=>{
      this.categore=data
    }))
  }

}
