import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showUForm:boolean=false;
  firstPage:boolean=false;
  showLight:boolean=true;
  showRForm:boolean=false;
  showMenu:boolean=true;
  scrWidth:number=0;
  menuHeight:number=0;
  user:User = new User();
  @HostListener('document:scroll', [])
            onScroll(): void {
                if(window.pageYOffset>0){
                  if(window.innerWidth>991){
                    this.showMenu = true;
                  }
                  this.showLight=true;
                    
                }
                else{
                  if(window.innerWidth>991 && this.firstPage){
                    this.showMenu = false;
                  }
                  if(this.firstPage){
                    this.showLight=this.showMenu;
                  }
                  
                }
                
            }
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      console.log(evt.url);
      if(evt.url=='/' || evt.url.indexOf('technologies')>-1){
        this.firstPage=true;
        this.showMenu=false;
        this.showLight=false;
      }
      else{
        this.firstPage=false;
        this.showLight=true;
        if(window.innerWidth<992){
          this.showMenu=false;
        }
      }
      
      window.scrollTo(0, 0)
     });
    if(window.innerWidth<991){
      this.scrWidth=window.innerWidth-40;
    }
    this.menuHeight=window.innerHeight-80;
  }
  toggle(){
    this.showMenu=!this.showMenu;
    if(this.firstPage){
      if(window.pageYOffset==0){
        this.showLight= this.showMenu;
      }
      
    }
    this.showUForm=false;

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
