import { Component, OnInit } from '@angular/core';
import { empModel } from '../employees.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
employee:empModel = {}
allEmployees:any = []

constructor(private api:ApiService, private router:Router){}

ngOnInit():void{
  this.api.getAllEmpAPI().subscribe((result:any)=>{
    // console.log(result);
    this.allEmployees = result
  })
}

addEmp(){
console.log(this.allEmployees);
const existingEmployee = this.allEmployees.find((item:any)=>item.id==this.employee.id)
if(existingEmployee){
  alert("Id Already Exists!!! Use unique id to add employee")
}else{
  this.api.saveEmpAPI(this.employee).subscribe({
    next:(result:any)=>{
      console.log(result);
      alert(`${result.name} has successfully added to DB`)
      this.router.navigateByUrl('')
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
    })
}

}

cancel(){
  this.employee = {}
}


}
