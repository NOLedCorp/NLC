import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/GetFactorial?number=  ASP.NET MVC
    //http://localhost:8080/angular/getFactorial.php?number=    PHP
    getUsers(){
        return this.http.get('http://nomokoiw.beget.tech/users.php');
    }
    GetTech(){
        return this.http.get('http://localhost:80/nlc/techs.php');
    }
    addUser(user:any){
        return this.http.post('http://nomokoiw.beget.tech/test.php', user);
    }
}