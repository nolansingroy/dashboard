import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products$ = this.http.get('http://localhost:3000/products');

  users$ = this.http.get('http://localhost:3000/users');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
