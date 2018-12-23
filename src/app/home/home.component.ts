import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  techs:any = [];
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.service.GetTech().subscribe(data => {
      console.log(data);
      this.techs=data;
    });
  }

}
