import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie.model';
import { Produit } from 'src/app/models/produit.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-formulaire',
  templateUrl: './produit-formulaire.component.html',
  styleUrls: ['./produit-formulaire.component.css']
})
export class ProduitFormulaireComponent implements OnInit {
  errorMessage!:string
  categories!:Categorie[]
  produits!:Produit[]

  //le lien de l'image
  urllink:string="assets/images/Apple-iPhone-X-232.png";

  constructor(
              private categorieService:CategorieService,
              private produitService:ProduitService,
              private fb:FormBuilder
            ) { }

  ngOnInit(){
    this.getAllCategorie();
  }

  getAllCategorie(){
    this.categorieService.getAllCategories().subscribe(data=>{
      this.categories=data;
      console.log(this.categories); 
    },erro=>{
      this.errorMessage=erro
      console.log(erro);
    })
  }

  //recuperation des champs input
  addProduit=this.fb.group({
    produitName:[''],
    photo:[''],
    prix:[''],
    description:[''],
    categorie:[null]
  })
  //function pour ajouter un produit dans la base de donnees
  saveProduit(){
  // this.addProduit.value.categorie={
  //   id:parseInt(this.addProduit.value.categorie)
  // };
    console.log(this.addProduit.value);
    this.produitService.createProduit(this.addProduit.value).subscribe(data=>{
      console.log("produit ajouter avec success");

    })
  }
  //La methode qui controle la selection d'image
  selectFile(even:any){
    if(even.target.files){
      let reader=new FileReader()
      reader.readAsDataURL(even.target.files[0])
      reader.onload=(even:any)=>{
        this.urllink=even.target.result
      }
    }
  }

}
