import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';




@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  public brandName;
  public mobiles: any;

  public __baseUrl = "http://192.168.1.100/mobile-tracker/";

  constructor( private _services: ServiceService, public route:ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.getMobiles();
  }

 

  getMobiles()
  {
    let bname = this.route.snapshot.paramMap.get('brandName');
    this.brandName = bname;
    this._services.getMobiles(this.brandName).subscribe((data: any )=>  {
      //console.log(data);
      this.mobiles = data;

    });
  }

  onClickMobile(mobile)
  {
    //alert(category);
    this.router.navigate(['/viewConfig',mobile.id]);
  }



  // members: {title: string, subtitle: string, content: string, url: string}[] = [
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  //   {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  // ];

}
