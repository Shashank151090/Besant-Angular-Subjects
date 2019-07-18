import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  gotoInputOutput(){
    this.router.navigate(['/dataTransfer'])
  }
  gotoPipes(){
    this.router.navigate(['/pipes']);
  }
  gotoSubjects(){
    this.router.navigate(['/subjects']);
  }
  gotoAnimation(){
    this.router.navigate(['./animation']);
  }
  gotoSearchFilter(){
    this.router.navigate(['./searchFilter']);
  }
  ngOnInit() {
  }

}
