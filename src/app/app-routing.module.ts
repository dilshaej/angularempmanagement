import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'',component:TableComponent},
  {path:'adduser',component:AddUserComponent},
  {path:':id/edit',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
