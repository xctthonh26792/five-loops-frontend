import { Component, ViewEncapsulation, forwardRef, ChangeDetectorRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { TenjinComponent } from '../p-control.component';
import _ from 'lodash';

@Component({
    selector: 'p-number',
    templateUrl: './p-number.component.html',
    styleUrls: ['./p-number.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TenjinNumberComponent),
            multi: true
        }
    ]
})
export class TenjinNumberComponent extends TenjinComponent implements AfterViewInit {
    @ViewChild(MatInput) control: MatInput;
    @Input() name: string;
    @Input() placeholder: string;
    @Input() disabled: boolean;
    @Input() required: boolean;
    @Input() negative: boolean = false;
    @Input() separator: number = 0
    @Input() min: number
    @Input() max: number
    @Input('fxFlex') flex: boolean;
    @Input() float: boolean

    constructor(private ref: ChangeDetectorRef) {
        super();
    }

    setValue(value: any) {
        this.onChange(isNaN(Number(value)) ? 0 : Number(value));
    }

    get pattern() {
        return `separator.${Math.max(this.separator, 0)}`
    }

    get errors() {
        return _.get(this.control, 'ngControl.errors');
    }

    ngAfterViewInit() {
        this.ref.detectChanges();
    }

    blur($event: any) {
        this.value = this.normalize(this.value);
    }

    normalize(value: any) {
        return isNaN(Number(value)) ? 0 : Number(value)
    }
}
