 import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
  employees=[];
  @Output() inputEvent = new EventEmitter()
  constructor(private emp:EmployeeService) { }

  ngOnInit() {
    this.emp.getemployee().subscribe(data =>this.employees = data);
  }

  add(val){
    //  this.inputEvent.emit(val);
    console.log(val);
  }
  onCreate()
  {
    alert("You click me");
  }
} 