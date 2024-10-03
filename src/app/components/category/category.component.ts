import { Component } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: any[]=[];
  
constructor(private categoryServ:CategoryService){

}
ngOnInIt() : void {this.getCategories();}

//   getCategories(){
//     this.categoryServ.getCategoryById().subscribe({
//       next:(res)=>{

// if(res.success===1){
//       this.categories=res.data;
//       console.log(this.categories,"new data");
//     }else{
// console.log(res.msg)
//     }
     
//     },error:(e)=>{
//       // console.log(e.msg)
//       console.log(e,'error')
//     }
//     })
//   };

getCategories() {
  console.log('Fetching categories...');
  this.categoryServ.getCategoryById().subscribe({
    next: (res) => {
      console.log('API response:', res);
      if (res.success === 1) {
        this.categories = res.data; // Get all categories
        console.log(this.categories, "new data");
      } else {
        console.log(res.msg);
      }
    },
    error: (e) => {
      console.log(e, 'error');
    }
  });
}






}
