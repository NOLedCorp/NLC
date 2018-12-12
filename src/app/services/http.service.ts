import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/GetFactorial?number=  ASP.NET MVC
    //http://localhost:8080/angular/getFactorial.php?number=    PHP
    getFactorial(num: number){
        return this.http.get('http://localhost:80/nlc/test.php?number=' + num);
    }
}