import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  urllink:string="assets/images/Apple-iPhone-X-232.png";
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

}
