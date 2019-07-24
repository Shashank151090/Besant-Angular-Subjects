import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services';
import { User } from '../models/user';
import { Role } from '../models/role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  gotoInputOutput(){
    this.router.navigate(['/dataTransfer'])
  }
  gotoPipes(){
    this.router.navigate(['/pipes']);
  }
  gotoRoles(){
    this.router.navigate(['/admin']);
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
