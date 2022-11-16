import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees:any = []

  constructor() { }

  ngOnInit(): void {
  this.employees= 
  [
    {id :1 ,name:"Varga Jáno$" , city :"Szelevény" },
    {id :2 ,name:"Drága Nagyfiam" , city :"Győr" },
    {id :3 ,name:"ASD" , city :"Szeged" }
  ]
  }

}
