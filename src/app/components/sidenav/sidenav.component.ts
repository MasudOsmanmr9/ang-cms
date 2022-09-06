import { Component, OnInit, EventEmitter } from '@angular/core';
import { CollectionsBuilderService } from 'src/app/services/collections-builder.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  collectionList:any[]=[];
  constructor(private cs:CollectionsBuilderService) { }

  ngOnInit(): void {
    this.collectionList = this.cs.getcollectionsList();
    console.log('collectionlist navvvvvvvvvvvvvvvvvvvvvvv',this.collectionList);
  }


  gotoformBuilder(id:number){
    this.cs.setSelectedCollectionList(id);

  }
}
