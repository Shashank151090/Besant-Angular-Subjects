import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor(private router: Router) { }
  public searchText : string;
  public customerData : any;
  ngOnInit() {
    this.customerData = [
      {"name": 'Anil kumar', "Age": 34, "blog" :'https://code-view.com'},
      {"name": 'Sunil Kumar Singh', "Age": 28, "blog" :'https://code-sample.xyz'},
      {"name": 'Sushil Singh', "Age": 24, "blog" :'https://code-sample.com'},
      {"name": 'Aradhya Singh', "Age": 5, "blog" :'https://code-sample.com'},
      {"name": 'Reena Singh', "Age": 28, "blog" :'https://code-sample.com'},
      {"name": 'Alok Singh', "Age": 35, "blog" :'https://code-sample.com'},
      {"name": 'Dilip Singh', "Age": 34, "blog" :'https://code-sample.com'}];
  }
  goBack(){
    this.router.navigate(['/'])
  }
}
