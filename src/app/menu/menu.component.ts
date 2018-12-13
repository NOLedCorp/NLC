import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showUForm:boolean=false;
  showRForm:boolean=false;
  user:User = new User();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  showForm(){
    this.showUForm = !this.showUForm;
  }
  ShowRegForm(){
    this.showRForm = !this.showRForm;
  }
  addUser(){
    this.httpService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.showForm();
      this.ShowRegForm();
    });
    console.log(this.user);
  }

}

export class User{
  Name:string;
  Email:string;
  Password:string;
  Photo?:string
}
