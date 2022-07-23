import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WHDocument } from 'src/app/model/wh-document.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() document: WHDocument = new WHDocument();
  @Output() record = new EventEmitter<WHDocument>();

  constructor() { }

  ngOnInit() {
  }

  recordDocument() {
    this.document.status = "recorded";
    this.document.dateOfRecording = new Date().toISOString();
    this.record.emit(this.document);
  }

}
