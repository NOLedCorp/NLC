import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  tech:any;
  constructor( private route: ActivatedRoute, private service:HttpService) { }

  ngOnInit() {
    this.service.GetTech(this.route.snapshot.paramMap.get("id")).subscribe(data => {
      console.log(data);
      this.tech=data;
    });
  }

}
