import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WHDocumentList } from "../model/wh-document-list.model";
import { map } from "rxjs/operators";
import { WHDocument } from "../model/wh-document.model";
import { DocumentItem } from "../model/document-item.model";
import { Article } from "../model/article.model";

const baseURL = "http://localhost:3000/api/documents";

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getAll(params?: any): Observable<WHDocumentList> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set("sort", params.sort || "")
          .set("sortDirection", params.sortDirection || "")
          .set("page", params.page || "")
          .set("pageSize", params.pageSize || ""),
      };
    }

    return this.http.get(baseURL, queryParams).pipe(
      map((data: any) => {
        return new WHDocumentList(data);
      })
    );
  }

  getOne(documentId: number): Observable<WHDocument> {
    return this.http.get(`${baseURL}/${documentId}`).pipe(
      map((data: any) => {
        return new WHDocument(data);
      })
    );
  }

  getItems(documentId: number): Observable<DocumentItem[]> {
    return this.http.get(`${baseURL}/${documentId}/items`).pipe(
      map((data: any) => {
        return (
          (data.results && data.results.map((x: any) => new DocumentItem(x))) ||
          []
        );
      })
    );
  }

  getArticles(): Observable<Article[]> {
    return this.http.get("http://localhost:3000/api/articles").pipe(
      map((data: any) => {
        return (
          (data.results && data.results.map((x: any) => new Article(x))) || []
        );
      })
    );
  }

  postItem(documentId: number, item: DocumentItem): Observable<DocumentItem> {
    return this.http.post(`${baseURL}/${documentId}/items`, item).pipe(
      map((data: any) => {
        return new DocumentItem(data);
      })
    );
  }

  recordDocument(document: WHDocument): Observable<WHDocument> {
    console.log(document);
    return this.http.put(`${baseURL}/${document._id}`, document).pipe(
      map((res) => {
        return new WHDocument(res);
      })
    );
  }
}
