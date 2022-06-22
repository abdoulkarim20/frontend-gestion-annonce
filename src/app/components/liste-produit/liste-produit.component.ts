import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  // url:string = "unsafe:C:\fakepath\wejfewhriheu.png"
  // path = new URL(this.url).pathname;
  // mot = this.path.split("C:%0Cakepath");

  // imageUri:any = "../../assets/" + this.mot[1];

  urllink:string="../../../assets/images";
  produits!:Produit[]
  errorMessage!:string

  constructor(private serviceProduit:ProduitService) { }

  ngOnInit() {
    this.getAllProduits();
  }

  //recuperation de tous les produits
  getAllProduits(){
    this.serviceProduit.getAllProduit().subscribe(data=>{
     this.produits=data   
    },error=>{
      this.errorMessage=error
      console.log(this.errorMessage);
      
    })
  }


  selectFile(even:any){
    if(even.target.files && even.target.files[0]){
      var reader=new FileReader();
      reader.onload=(even:any)=>{
        this.urllink=even.target.result
      }
      reader.readAsDataURL(even.target.files[0])
    }
  }

}
