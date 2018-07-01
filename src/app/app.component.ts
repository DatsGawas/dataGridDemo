import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
 let $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gridLocalData: any[] = [];
  showModel: boolean = false;
  rowData: any;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    let response: any;
    this.httpClient.get('assets/data/griddata.json').subscribe(
      res => {
        response = res;
      },
      error => {
        console.log(error);
      },
      () => {
        this.gridLocalData = response.data;
      }
    );
  }

  onRowClick(data: any) {
    this.rowData = data;
    this.showModel = true;
  }

}


