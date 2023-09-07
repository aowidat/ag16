import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private data: DataService){}

  upload(){
   this.data.loadData().forEach( x => {
    console.log(x.running);
  });
  }
}
