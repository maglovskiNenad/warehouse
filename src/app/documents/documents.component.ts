import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WHDocumentList } from '../model/wh-document-list.model';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: WHDocumentList = new WHDocumentList();

  params = {
    sort: "",
    sortDirection: "",
    page: 1,
    pageSize: 10
  }

  settings = {
    dateOfCreation: true,
    dateOfRecording: true,
    status: true,
    transactionType: true,
    businessPartner: true,
    businessPartnerLocation: true,
    year: true,
  }

  showSettings = false;

  constructor(private service: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.service.getAll(this.params).subscribe((documents) => {
      this.documents = documents;
    })
  }

  changeSort(sort: string) {
    if (this.params.sort == sort) {
      this.params.sortDirection = this.params.sortDirection == 'asc' ? 'desc' : 'asc'
    } else {
      this.params.sort = sort;
      this.params.sortDirection = 'asc'
    }
    this.getDocuments();
  }

  onPageChange() {
    this.getDocuments();
  }

  openDocument(documentId: number) {
    this.router.navigate(['document', documentId])
  }

}
