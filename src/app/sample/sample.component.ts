import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    document.documentElement.requestFullscreen();
    this.router.navigate(['/home']);
  }

}
