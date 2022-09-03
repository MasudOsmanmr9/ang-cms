import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dynamic-form-datatable',
  templateUrl: './dynamic-form-datatable.component.html',
  styleUrls: ['./dynamic-form-datatable.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DynamicFormDatatableComponent implements OnInit, OnChanges {


  @Input() tabledata: any[] = [];
  @Input() refText: any;
  public searchForm!: FormGroup;
  screenSize = 0;
  headers: any[] = [];
  rows: any[] = [];
  dataRows: any[] = [];
  pageNumber = 0;
  pageSize = 0;
  totalRows = 0;
  lastKey = 0;
  isLoading = false;
  pageWiseLastKeys: any[] = [0];
  headerHeight = 50;

  isSubmitted: boolean = false;

  selectItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  colKeys = ['name', 'age'];

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    // private imageCompress: NgxImageCompressService,
    private route: ActivatedRoute,
  ) {
    this.pageNumber = 0;
    this.pageSize = 10;
    this.screenSize = window.innerWidth;

    // this.changeEvent = this.changeTextFromParent;
  }
  ngOnChanges(changes: SimpleChanges): void {

    //console.log('ccccccccccccccccccccccccccccccc ::',changes)
    // if(changes['tabledata']['currentValue']!=null && changes['tabledata']['currentValue']!=null && changes['tabledata']['currentValue']!=undefined){
    //     this.createHeaders(changes['tabledata']['currentValue'][0]);
    // }

    if (this.tabledata != null && this.tabledata[0] != null && this.tabledata[0] != undefined && this.tabledata.length == 1) {
      this.createHeaders(this.tabledata[0]);
    }

    this.rows = this.tabledata;
    this.dataRows = this.tabledata;
    //this.totalRows = this.tabledata.length;
    //console.log('this rowsssssss 12345',this.rows, this.headers);
    // if(this.tabledata!=null && this.tabledata[0]!=null && this.tabledata[0]!=undefined){
    //     this.createHeaders(this.tabledata[0]);
    // }

    //this.cd.detectChanges();
    return;
  }



  ngOnInit(): void {

    // this.searchForm = this.fb.group({
    //   text: [null, [Validators.required]],
    //   select: [null, [Validators.required]],
    //   multiSelect: [null, [Validators.required]],
    //   date: [null, [Validators.required]],
    //   bool1: [false, [Validators.required]],
    // });
    
    // if(BANK_LIST!=null && BANK_LIST[0]!=null && BANK_LIST[0]!=undefined){
    //     this.createHeaders(BANK_LIST[0]);
    // }
    // this.rows = BANK_LIST;
    // this.dataRows = BANK_LIST;
    // this.totalRows = BANK_LIST.length;
    // if(this.tabledata!=null && this.tabledata[0]!=null && this.tabledata[0]!=undefined){
    //     this.createHeaders(this.tabledata[0]);
    // }
    // this.rows = this.tabledata;
    // this.dataRows = this.tabledata;
    // this.totalRows = this.tabledata.length;
    // console.log(this.headers);
    //console.log('init');
  }



  changeText() {
    this.refText = "This is a text from table componet";
  }
  changeTextFromParent() {
    this.refText = "This is a text changed by parent";
    return "This is a text from table componet";
  }
  createHeaders(props: any) {
    if (props == null) {
      return;
    }
    console.log('Object.keys(props) :', Object.keys(props));
    // let b = []
    // for (const [key, value] of Object.entries(props)) {
    //     let a ={'name':key}
    //     b.push(a);
    // }
    let a = Object.keys(props)
    a.forEach((e) => {
      let a = { 'name': e }
      this.headers.push(a);
    })

  }
  setPage(event: any) {

  }

  onActivate(event: any) {

  }


}
