import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from '../../../../services'

import * as _ from 'lodash';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PdfViewerComponent implements OnInit {

  constructor(private ref: MatDialogRef<PdfViewerComponent>,
    @Inject(MAT_DIALOG_DATA) bindings: any, private loading: LoadingService) {
    this.title = _.get(bindings, 'title');
    this.data = _.get(bindings, 'data');
  }

  title: string
  data: any
  furl: any

  ngOnInit(): void {
    if (this.data) {
      this.furl = URL.createObjectURL(this.data);
    }
  }

  accept() {
    this.ref.close(true)
  }

  cancel() {
    this.ref.close(false)
  }

}
