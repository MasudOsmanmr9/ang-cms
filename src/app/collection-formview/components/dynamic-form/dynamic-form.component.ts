import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { forEachChild } from 'typescript';
import { SchemaBuilderService} from 'src/app/services/schema-builder.service';
import { CollectionsBuilderService } from 'src/app/services/collections-builder.service';



export interface FormSchema {
  name: string
  label: string
  value: string | boolean | null
  type: string
  validatopt: any
  selectOptions?: any[]
  // selectOptions?: string[]
}

export interface selectFormSchema {
  name: string;
  label: string;
  type: string;
  validatopt: any;
  value:any;
  // options?: Options
  selectOptions?: any[]
  multiple: boolean
}

interface ValidateOptions {
  required?: boolean
  minLength?: number
  min: string
  max: string
}

interface Options {
  min: string
  max: string
  step: string
  icon: string
}
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  formGroupHolder!: FormGroup;
  // dt: any;
  // cities = [
  //   { id: 1, name: 'Vilnius' },
  //   { id: 2, name: 'Kaunas' },
  //   { id: 3, name: 'Pavilnys', disabled: true },
  //   { id: 4, name: 'Pabradė' },
  //   { id: 5, name: 'Klaipėda' }
  // ];
  // selectedCity: any;
  // selectedItem: any;
  // selectedItems: any[] = [];
  storedTableData:any[]=[]

  formSchemas : (FormSchema | selectFormSchema)[]=[]
  // formSchemas: (FormSchema | selectFormSchema)[] = [
  //   // formSchemas: FormSchema[] = [
  //   {
  //     "name": "firstName",
  //     "label": "First name:",
  //     "value": "",
  //     "type": "text",
  //     "validatopt": {
  //       "required": true,
  //       "minLength": 10,
  //       "maxLength": 15,
  //     }
  //   },
  //   {
  //     "name": "password",
  //     "label": "password",
  //     "value": "",
  //     "type": "password",
  //     "validatopt": {
  //       "required": true,
  //       "minLength": 10,
  //       "maxLength": 15,
  //     }
  //   },
  //   {
  //     "name": "lastName",
  //     "label": "Last name:",
  //     "value": "",
  //     "type": "text",
  //     "validatopt": {
  //       "required": true,
  //       "minLength": 10,
  //       "maxLength": 15,
  //     }
  //   },
  //   {
  //     "name": "comments",
  //     "label": "Comments",
  //     "value": "",
  //     "type": "textarea",
  //     "validatopt": {
  //       "required": true,
  //       "minLength": 8,
  //       "maxLength": 13,
  //     }
  //   },
  //   {
  //     "name": "agreeTerms",
  //     "label": "This is a checkbox?",
  //     "value": null,
  //     "type": "checkbox",
  //     "validatopt": {
  //       "required": true,
  //     }
  //   },
  //   {
  //     "name": "size",
  //     "label": "",
  //     "value": "",
  //     "type": "range",
  //     "validatopt": {}
  //   },
  //   {
  //     "name": "lightDark",
  //     "label": "Do you like toggles?",
  //     "value": true,
  //     "type": "toggle",
  //     "validatopt": {}
  //   },
  //   {
  //     "name": "select-field",
  //     "label": "select Country",
  //     "value":null,
  //     "multiple": false,
  //     "selectOptions": [],
  //     "validatopt": {},
  //     "type": "select",
  //   }

  // ];

  errorShowOnSubmit:boolean = false;
  validatorStore: any = {
    'required': Validators.required,
    'maxLength': (val: number) => Validators.maxLength(val),
    'minLength': (val: number) => Validators.minLength(val),
    'email': Validators.email
  }

  testText = "THis is a home componenet text";

  constructor(private fb: FormBuilder,private ss:SchemaBuilderService,
     private cs: CollectionsBuilderService, private router :Router,) { }

  
  ngOnInit(): void {
    // this.formSchemas = this.ss.getformSchemaCollection();
    // console.log('form schemaaaaaaaaaaaaaaaaaaaaas',this.formSchemas);
    // if(this.cs.getSelectedCollection() != null){
    //   this.formSchemas = this.cs.getSelectedCollection()['schema'];
    //   console.log('this.formSchemassssssssssssssss',this.formSchemas);
    // }
    // const gneratedGroupOpt = this.groupOptionFactory(this.formSchemas);
    // this.formGroupHolder = this.fb.group(gneratedGroupOpt);
    this.cs.collectionChangeEvent.subscribe((collection:any)=>{
      console.log('this is collectionnnnnnnnnnnnnnnnnnnnnn',collection.schema);
      this.formSchemas = collection.schema;
      const gneratedGroupOpt = this.groupOptionFactory(this.formSchemas);
      this.formGroupHolder = this.fb.group(gneratedGroupOpt);

    })
  }




  validatorFactory(validateOpt: any): Validators[] | any {
    let vlds: Validators[] = [];
    for (const opt in validateOpt) {
      if (['min', 'max', 'minLength', 'maxLength'].includes(opt)) {
        validateOpt[opt] == null?'':vlds.push(this.validatorStore[opt](validateOpt[opt]))
      } else if(validateOpt[opt]) {
        vlds.push(this.validatorStore[opt]);
        // console.log('vldsssssssssssss ',vlds)
      }
    }
    return vlds;
  }

  groupOptionFactory(formConfig: (FormSchema | selectFormSchema)[]): any {
    let tempGroup: any = {}
    formConfig.forEach((element: FormSchema | selectFormSchema) => {
      tempGroup[element.name] = [element.value ?? '', this.validatorFactory(element.validatopt)]
    });
    return tempGroup;
  }



  // methodssssssssssssssssssss
  goTopage(path:string){
    this.router.navigateByUrl(path);
  }
  submitForm() {
    this.errorShowOnSubmit = true;
    if(this.formGroupHolder.valid){
      let newRowData = [...this.storedTableData,this.formGroupHolder.value];
      this.storedTableData = newRowData;
      this.testText = 'working';
    }
  }
  getLoanType() {
    this.formGroupHolder.get('loanType')?.value;
  }
  setLoanTypeValue() {
    let abc = {
      'loanName': [null, [Validators.required]],
      'loanType': [],
      'loanDescription': [],
    }

    // have to pass all property in abc obj
    this.formGroupHolder.setValue(abc);
    // dont have to pass all property in abc obj
    this.formGroupHolder.patchValue(abc);
  }
}
