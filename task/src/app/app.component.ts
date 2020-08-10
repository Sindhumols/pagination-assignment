import { RandomUserService } from './services/random-user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 data:Array<any>;
 total_count:Number
 page:Number=1

  constructor(private randomUser: RandomUserService) {

  this.data = new Array<any>()
  }
  getUsers(){
    this.randomUser.getData().subscribe((data) => {
      console.log(data)
      this.data = data.items
      this.total_count = data.items.length
    })
  }

}