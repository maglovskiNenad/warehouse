import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { DocumentItem } from 'src/app/model/document-item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  
  @Input() articles: Article[] = [];
  newItem = new DocumentItem();

  
  @Output()
  itemAdded = new EventEmitter<DocumentItem>();

  constructor() { }

  ngOnInit(): void {
  }

  
  saveItem() {
    this.itemAdded.emit(this.newItem);
    this.newItem = new DocumentItem();
  }


}
