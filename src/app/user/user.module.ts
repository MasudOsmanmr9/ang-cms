import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
   // RouterModule
  ]
})
export class UserModule { }
