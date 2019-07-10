import { Component, OnInit } from '@angular/core';
import { MyOrderByPipe } from '../sort.pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  constructor(private orderPipe: MyOrderByPipe, private router: Router) {
    console.log("order by digit");
    console.log(this.orderPipe.transform(this.items, 'digit'));
   }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/'])
  }

  items = [
    { title: "third", value: "three", digit: 44 },
    { title: "second", value: "two", digit: 14 },
    { title: "first", value: "one", digit: 100 },
  ];

  order = "title";
  reverse = false;
}
