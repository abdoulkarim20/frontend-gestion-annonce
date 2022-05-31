import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-forme',
  templateUrl: './categorie-forme.component.html',
  styleUrls: ['./categorie-forme.component.css']
})
export class CategorieFormeComponent implements OnInit {
  categorie:Categorie = new Categorie();
  message:boolean=false;
  constructor(private categorieServie:CategorieService) { }

  ngOnInit(): void {
  }
  //avec form module
  addCategorie=new FormGroup({
    libelle:new FormControl(''),
    descrition:new FormControl('')
  })
  saveCategorie(){
    this.categorieServie.createCategorie(this.addCategorie.value).subscribe((data=>{
      this.message=true,
      this.addCategorie.reset({})
    }))
  }

  removeMessage(){
    this.message=false;
  }


}
