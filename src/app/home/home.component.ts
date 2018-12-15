import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  techs:any = [
    {img:"../../assets/images/angular.png", note:"Angular", id:1},
    {img:"../../assets/images/bootstrap.png", note:"Bootstarp",id:2},
    {img:"../../assets/images/express.png", note:"Express", id:3},
    {img:"../../assets/images/jquery.png", note:"JQuery", id:4},
    {img:"../../assets/images/cs.png", note:"C#" , id:5},
    {img:"../../assets/images/mongodb.png", note:"MongoDB", id:6},
    {img:"../../assets/images/laravel.png", note:"Laravel", id:7},
    {img:"../../assets/images/go.png", note:"GO", id:8},
    {img:"../../assets/images/mysql.png", note:"MySql", id:9},
    {img:"../../assets/images/net.png", note:"ASP.Net Core", id:10},
    {img:"../../assets/images/react.png", note:"React.js", id:11},
    {img:"../../assets/images/plsql.png", note:"Oracle PL/Sql", id:12},
    {img:"../../assets/images/sql-server.png", note:"MS Sql Server", id:13},
    {img:"../../assets/images/vue.png", note:"Vue.js", id:14},
    {img:"../../assets/images/php.png", note:"PHP", id:15},
    {img:"../../assets/images/node.png", note:"Node.js", id:16}
  ];
  constructor() { }

  ngOnInit() {
  }

}
