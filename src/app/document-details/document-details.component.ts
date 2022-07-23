import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../model/article.model";
import { DocumentItem } from "../model/document-item.model";
import { WHDocument } from "../model/wh-document.model";
import { DocumentService } from "../services/document.service";

@Component({
  selector: "app-document-details",
  templateUrl: "./document-details.component.html",
  styleUrls: ["./document-details.component.css"],
})
export class DocumentDetailsComponent implements OnInit {
  documentId: number = 0;
  document: WHDocument = new WHDocument();

  articles: Article[] = [];
  items: DocumentItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: DocumentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.documentId = params["documentId"];
      this.getArticles();
      this.getDocument();
      this.getItems();
    });
  }

  getDocument() {
    this.service.getOne(this.documentId).subscribe((document: WHDocument) => {
      this.document = document;
    });
  }

  getArticles() {
    this.service.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  getItems() {
    this.service
      .getItems(this.documentId)
      .subscribe((items: DocumentItem[]) => {
        this.items = items;
      });
  }

  addItem(newItem: DocumentItem): void {
    console.log(newItem);
    newItem.documents = this.documentId;

    this.service
      .postItem(this.documentId, newItem)
      .subscribe((addedItem: DocumentItem) => {
        this.items.push(addedItem);
      });
  }

  recordDocument(document: WHDocument) {
    this.service
      .recordDocument(document)
      .subscribe((doc) => (this.document = doc));
  }
}
