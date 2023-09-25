import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employeeData';

  constructor(){}

  ngOnInit(): void {
  }
  id:any ='';
  accoridion(ids:any){
    console.log(ids)
   if(this.id==ids){
    this.id='';
   }
   else{
    this.id=ids;
   }
    }
}
