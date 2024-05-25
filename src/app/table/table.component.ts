import { Component, OnInit } from '@angular/core';
import { empModel } from '../employees.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
allEmployees:empModel[] = []

constructor(private api:ApiService){}

ngOnInit(): void {
  this.getAllEmployees()
}
getAllEmployees(){
  this.api.getAllEmpAPI().subscribe((result:any)=>{
    this.allEmployees = result
    console.log(this.allEmployees);
    
  })
}
remove(id:any){
  this.api.removeEmployeeAPI(id).subscribe((result:any)=>{
    this.getAllEmployees()
  })
  }
}
