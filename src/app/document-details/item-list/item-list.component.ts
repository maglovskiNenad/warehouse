import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { DocumentItem } from 'src/app/model/document-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() articles: Article[] = [];
  @Input() items: DocumentItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  

  codeToArticleName(code: string) {
    let name = "";
    for (let art of this.articles) {
      if (art.code == code) {
        name = art.name;
        break;
      }
    }
    return name
  }

}
