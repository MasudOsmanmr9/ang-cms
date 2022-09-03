import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormviewHomeComponent } from './pages/formview-home/formview-home.component';

const routes: Routes = [
  {
    path:'', component: FormviewHomeComponent,
    
    children: [
      {path:'formgenerate',component:DynamicFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormviewRoutingModule { }
