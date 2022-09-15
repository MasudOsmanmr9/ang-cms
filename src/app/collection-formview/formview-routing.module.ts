import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormDataPageComponent } from './components/form-data-page/form-data-page.component';
import { FormviewHomeComponent } from './pages/formview-home/formview-home.component';
import { DynamicFormPageComponent } from './components/dynamic-form-page/dynamic-form-page.component';

const routes: Routes = [
  {
    path:'', component: FormviewHomeComponent,
    
    children: [
      // {path:'formgenerate',component:DynamicFormComponent}
      {path:'formgenerate',component:DynamicFormPageComponent},
      {path:'schemadata',component:FormDataPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormviewRoutingModule { }
