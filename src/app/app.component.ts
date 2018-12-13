import { Component, OnInit, HostListener} from '@angular/core';
import { HttpService} from './services/http.service';
import { FormsModule } from '@angular/forms';
import { User } from './menu/menu.component';
   
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [HttpService],
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    showMenu:boolean=false;
    factorial: number;
    done: boolean = false;
    mas:any;
    @HostListener('document:scroll', [])
            onScroll(): void {
                if(window.pageYOffset>0){
                    this.showMenu = true;
                }
                else{
                    this.showMenu = false;
                }
            }
    constructor(private httpService: HttpService){
        let t = this;
        let s = setInterval(function(this){
            t.httpService.getUsers().subscribe((data:User[]) => {
                
                t.mas = data;
                
            });
        }, 5000);
        
    }
    
}