import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empModel } from '../employees.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 server_url="https://anguilartestapiserver.onrender.com"
  constructor(private http:HttpClient) { }

  saveEmpAPI(employee:empModel) {
   return this.http.post(`${this.server_url}/employees`,employee)
  }

  getAllEmpAPI(){
    return this.http.get(`${this.server_url}/employees`)
  }

  getAEmployeeAPI(id:any){
    return this.http.get(`${this.server_url}/employees/${id}`)
 
  }

  updateEmployeeAPI(employee:empModel){
    return this.http.put(`${this.server_url}/employees/${employee.id}`,employee)

  }

  removeEmployeeAPI(id:any){
    return this.http.delete(`${this.server_url}/employees/${id}`)

  }

}
