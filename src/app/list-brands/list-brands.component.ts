import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.css']
})
export class ListBrandsComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onClickBrand(brandName)
  {
    //alert(category);
    this.router.navigate(['/listProducts',brandName]);
  }


}
