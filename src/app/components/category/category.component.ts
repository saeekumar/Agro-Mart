import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  category:any;
  singleCategory:any;

  constructor(private categoryServ: CategoryService,private route: ActivatedRoute) {
   
    
  }
  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id'); // Get the ID from the route

    if (categoryId) {
      this.getCategoriesById(Number(categoryId)); // Fetch category by ID
    } else {
      this.getCategories(); // Fetch all categories
    }
    
  }

  getCategories() {
    console.log("calling api");
    this.categoryServ.getCategories().subscribe({
      next: (res) => {
        if (res.success === 1 ) {
          this.categories = res.data;
          console.log(this.categories, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        // console.log(e.msg)
        console.log(e, 'error');
      },
    });
  }

  getCategoriesById(id:any) {
    this.categoryServ.getCategoryById(id).subscribe({
      next: (res) => {
        if (res.success === 1) {
          this.singleCategory = res.data;
          console.log(this.singleCategory, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        // console.log(e.msg)
        console.log(e, 'error');
      },
    });
  }

}
