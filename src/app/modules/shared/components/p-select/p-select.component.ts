import { Component, ViewEncapsulation, forwardRef, ChangeDetectorRef, Input, ViewChild, AfterViewInit, ContentChild, TemplateRef, ContentChildren, QueryList, Sanitizer } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TenjinComponent } from '../p-control.component';
import _ from 'lodash';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import Fuse from 'fuse.js';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'p-select',
  templateUrl: './p-select.component.html',
  styleUrls: ['./p-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TenjinSelectComponent),
      multi: true
    },
  ]
})
export class TenjinSelectComponent extends TenjinComponent implements AfterViewInit {
  @ViewChild(MatSelect) control: MatSelect;
  @ContentChildren(MatOption) options: QueryList<MatOption>;

  @Input() name: string;
  @Input() placeholder: string;

  @Input('label.search') label_search: string;
  @Input('label.empty') label_empty: string;
  @Input('label.none') label_none: string;
  @Input() search: boolean = false;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input('fxFlex') flex: boolean;
  @Input() float: boolean

  private elements: Array<Object>
  models: Array<Object>

  private fuse: Fuse<any, any>;

  constructor(private ref: ChangeDetectorRef, private sanitize: DomSanitizer) {
    super();
    this.fuse = new Fuse([], { keys: ['text'] });
  }

  get errors() {
    return _.get(this.control, 'ngControl.errors');
  }

  ngAfterViewInit() {
    this.preparing();
    this.options.changes.subscribe(() => {
      this.preparing();
    })
  }

  filter($event = undefined) {
    if (_.isEmpty($event)) {
      this.models = this.elements;
      this.ref.detectChanges();
      return;
    }
    this.models = this.fuse.search($event)
    this.ref.detectChanges();
  }

  private preparing() {
    this.elements = [];
    this.options.forEach((option) => {
      const value = option.value;
      const html = option._getHostElement().innerHTML;
      const text = option._getHostElement().getAttribute('text')
      this.elements.push({
        value: value,
        html: this.sanitize.bypassSecurityTrustHtml(html),
        text: text
      })
    })
    this.fuse.setCollection(this.elements)
    this.filter()
    this.ref.detectChanges();
  }

  change($event) {
    this.setValue($event)
  }
}
