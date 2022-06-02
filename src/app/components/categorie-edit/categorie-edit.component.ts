import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit {
  message:boolean=false;
  categorie!:Categorie[]
  id!:number


  constructor(private categorieService:CategorieService,private fb:FormBuilder,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.router.snapshot.params['id']
    // console.log(this.id);
    this.categorieService.getOnceCategorie(this.id).subscribe((data:any)=>{
      this.editCategorie=this.fb.group({
        libelle:(data['libelle']),
        descrition:(data['descrition'])
        
      })
    })
  }
  //formGroup
  editCategorie=this.fb.group({
    libelle:['',Validators.required],
    descrition:['',Validators.required]
    
  })

  //update categorie
  updateCategorie(){
  // console.log(this.editCategorie.value);
  if(this.editCategorie.invalid) return;
  this.categorieService.updateCategorie(this.id,this.editCategorie.value)
  .subscribe((data=>{
    this.message=true
  }))
  }

  //remve message success
  removeMessage(){
    this.message=false;
  }

}
