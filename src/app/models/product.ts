import { AppRoutingModule } from "../app-routing.module";

export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}