import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsBuilderService } from 'src/app/services/collections-builder.service';
//import { Console } from 'console';
import { FormBuilderService } from 'src/app/services/form-builder.service';


export interface FormSchema {
  name: string
  label: string
  value: string | boolean | null
  type: string
  validatopt: any
  selectOptions?: any[]
  // selectOptions?: string[]
}

@Component({
  selector: 'app-form-data-page',
  templateUrl: './form-data-page.component.html',
  styleUrls: ['./form-data-page.component.css']
})
export class FormDataPageComponent implements OnInit {

  constructor(private fbs: FormBuilderService, private cs: CollectionsBuilderService, private router:Router ) { }

  // form's collections data
  formSchemas: FormSchema[] = []

  // table components data
  storedTableData: any[] = [];
  tableFields: any[] = [];
  currentCollection: any;
  editCollectionInfo: any;
  editCollectionSchema: any;
  editDataShow: any;
  @ViewChild('actionModalButton', { static: true }) actionModalButton !: ElementRef;

  ngOnInit(): void {

    this.fbs.storedTableDataChangeEvent.subscribe((storedData: any[]) => {
      console.log('stored dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',storedData);
      this.storedTableData = storedData;
      this.tableFields = this.fbs.getTableFields();
    })

    this.cs.collectionChangeEvent.subscribe((collection: any) => {
      console.log('collectionChangeEvent access');
      this.fbs.setTableFields(collection?.table_fields ?? []);
      this.fbs.setCurrentCollectionInfo(collection);
      if (localStorage.getItem(collection?.id) != null && this.currentCollection?.id !== collection.id) {
        this.storedTableData = [];
        //console.log('form dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa pageeeeeeeeeeeeeeeeeeee happeens')
        this.fbs.newlyAssignStoredTableData(JSON.parse(localStorage.getItem(collection.id)!));
      }
      else {
        this.storedTableData = [];
        //console.log('form dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa pageeeeeeeeeeeeeeeeeeee happeens 1')
        this.fbs.newlyAssignStoredTableData([]);
      }
      this.currentCollection = collection;

    })

    console.log('form dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa pageeeeeeeeeeeeeeeeeeee')
    this.cs.collectionChangeEvent.emit(this.cs.getSelectedCollection());

  }
  editf: Function = (value: any) => {
    this.editDataShow = value;
    this.fbs.setEditData(value);
    this.editCollectionInfo = this.cs.getCollectionById(value.schemaId);
    this.editCollectionSchema = this.editCollectionInfo.schema;
    console.log('edit collection Infoooooooooooooooooooooo', this.editCollectionInfo.schema);
   // this.actionModalButton.nativeElement.click();
    this.router.navigateByUrl('/formview/formgenerate');

  }
  deletef: Function = (value: any) => {
    console.log('this is workingggggggoo for delete', value);
    this.fbs.deleteData(value);
  }
  goTopage(path: string) {
    this.router.navigateByUrl(path);
  }
}
