import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-forme',
  templateUrl: './categorie-forme.component.html',
  styleUrls: ['./categorie-forme.component.css']
})
export class CategorieFormeComponent implements OnInit {
  message:boolean=false;
  submitted:boolean=false
  constructor(private categorieServie:CategorieService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(){
  }
  //avec form module
  addCategorie= this.fb.group({
    libelle:['',Validators.required],
    descrition:['',Validators.required]
  })
  saveCategorie(){
    if(this.addCategorie.invalid) return
      this.categorieServie.createCategorie(this.addCategorie.value).subscribe((data=>{
      this.message=true,
      this.addCategorie.reset({})
    }))
  }

  removeMessage(){
    this.message=false;
  }
  //la redirection
  // redirect(){
  //   this.router.navigate(['/categorie-liste'])
  // }


}
