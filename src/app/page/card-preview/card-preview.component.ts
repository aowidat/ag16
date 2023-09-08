import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {
  @Input() item!: Data;

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.item.studyDestSchema);

  }

}
