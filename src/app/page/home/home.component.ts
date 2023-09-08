import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  value: String = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<Data> = new MatTableDataSource<Data>();
  selected: Data | null = null;

  constructor(private dataService: DataService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    this.doUpload();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  doUpload() {
    this.dataSource.data = this.dataService.loadData().map(x => {
      x.collapesd = true;
      return x;
    });
  }

  doFilter() {

  }
  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  taggelHide(item: Data){
    item.collapesd = !item.collapesd;
  }

  onCardClicked(item: Data){
    this.router.navigate(['items/' + `${item.studySource}`], {
      state:{
        data: item
      }
    });
  }
  openPreview(item: Data): void {
    console.log(item.studyDestSchema);

    this.selected = item;
  }

  closePreview(): void {
    this.selected = null;
  }
}
