import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserCreateComponent } from './components/user-create/user-create.component';


const routes: Routes = [
  {
    path:'', component: UserHomeComponent,
    
    children: [
      // {path:'formgenerate',component:DynamicFormComponent}
      {path:'sign-in',component:UserCreateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
