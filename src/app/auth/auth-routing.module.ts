import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path:'', component: AuthHomeComponent,
    
    children: [
      // {path:'formgenerate',component:DynamicFormComponent}
      {path:'sign-in',component:SignInComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
