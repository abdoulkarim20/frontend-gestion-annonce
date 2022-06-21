import { Categorie } from "./categorie.model";

export interface Produit{
    id:number;
    produitName:string;
    photo:string;
    prix:number;
    description:string;
    categorie:Categorie
}