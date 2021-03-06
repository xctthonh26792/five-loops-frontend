import { Component, ViewEncapsulation, forwardRef, ChangeDetectorRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { TenjinComponent } from '../p-control.component';
import _ from 'lodash';

@Component({
    selector: 'p-password',
    templateUrl: './p-password.component.html',
    styleUrls: ['./p-password.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TenjinPasswordComponent),
            multi: true
        }
    ]
})
export class TenjinPasswordComponent extends TenjinComponent implements AfterViewInit {
    @ViewChild(MatInput) control: MatInput;
    @Input() name: string;
    @Input() placeholder: string;
    @Input() disabled: boolean;
    @Input() required: boolean;
    @Input() trim: boolean;
    @Input() minlength: number
    @Input() maxlength: number
    @Input('fxFlex') flex: boolean;
    @Input() float: boolean

    constructor(private ref: ChangeDetectorRef) {
        super();
    }

    get errors() {
        return _.get(this.control, 'ngControl.errors')
    }

    ngAfterViewInit() {
        this.ref.detectChanges();
    }

    blur($event: any) {
        this.value = this.normalize(this.value);
    }

    normalize(value: string) {
        return (this.trim !== null && this.trim !== undefined) ? (value || '').trim() : value;
    }
}
