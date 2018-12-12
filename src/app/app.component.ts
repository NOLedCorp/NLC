import { Component, OnInit} from '@angular/core';
import { HttpService} from './services/http.service';
import { FormsModule } from '@angular/forms';
   
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [HttpService]
})
export class AppComponent { 
   
    factorial: number;
    done: boolean = false;
    mas:any;
    constructor(private httpService: HttpService){}
    submit(num: number){
        this.httpService.getFactorial(Number(num)).subscribe((data:any) => {
            console.log(data);
            this.mas = data;
            this.mas.forEach(element => {
              element.Date = new Date(element.Date);
            });
        });
    }
}