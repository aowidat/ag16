import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  item!: Data;

  constructor(private router: Router){
    this.item = router.getCurrentNavigation()?.extras.state?.['data'];
  }

  taggelHide(item: Data){
    item.collapesd = !item.collapesd;
  }
}
