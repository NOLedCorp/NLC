import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  techs:any;
  constructor( private route: ActivatedRoute, private service:HttpService) { }

  ngOnInit() {
    this.service.GetTech().subscribe(data => {
      console.log(data);
      this.techs=data;
    });
  }

}
