import { Component, OnInit} from '@angular/core';
import { HttpService} from './services/http.service';
import { FormsModule } from '@angular/forms';
import { User } from './menu/menu.component';
   
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [HttpService]
})
export class AppComponent { 
   
    factorial: number;
    done: boolean = false;
    mas:any;
    constructor(private httpService: HttpService){
        let t = this;
        let s = setInterval(function(this){
            t.httpService.getUsers().subscribe((data:User[]) => {
                
                t.mas = data;
                
            });
        }, 5000);
    }
    
}