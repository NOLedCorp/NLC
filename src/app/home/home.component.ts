import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  techs:any = [
    {img:"../../assets/images/angular.png", note:"Angular"},
    {img:"../../assets/images/bootstrap.png", note:"Bootstarp"},
    {img:"../../assets/images/express.png", note:"Express"},
    {img:"../../assets/images/jquery.png", note:"JQuery"},
    {img:"../../assets/images/cs.png", note:"C#"},
    {img:"../../assets/images/mongodb.png", note:"MongoDB"},
    {img:"../../assets/images/laravel.png", note:"Laravel"},
    {img:"../../assets/images/go.png", note:"GO"},
    {img:"../../assets/images/mysql.png", note:"MySql"},
    {img:"../../assets/images/net.png", note:"ASP.Net Core"},
    {img:"../../assets/images/react.png", note:"React.js"},
    {img:"../../assets/images/plsql.png", note:"Oracle PL/Sql"},
    {img:"../../assets/images/sql-server.png", note:"MS Sql Server"},
    {img:"../../assets/images/vue.png", note:"Vue.js"},
    {img:"../../assets/images/php.png", note:"PHP"},
    {img:"../../assets/images/node.png", note:"Node.js"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
