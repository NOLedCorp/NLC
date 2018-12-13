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
  showMenu:boolean=false;
  scrWidth:number=0;
  user:User = new User();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    if(window.innerWidth<991){
      this.scrWidth=window.innerWidth-32;
    }
  }
  toggle(){
    this.showMenu=!this.showMenu;
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
