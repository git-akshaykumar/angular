import { isDefined } from '@angular/compiler/src/util';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-input',
  template: `
    <input
      type="text"
      name="name"
      [value]="value"
      (input)="onChange($event)"
      (blur)="touched()"
      [disabled]="disabled"
    />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }

      input[type='text'] {
        margin: 5px;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HelloComponent),
      multi: true
    }
  ]
})
export class HelloComponent implements ControlValueAccessor {
  @Input() disabled: boolean;

  public value: string;
  public changed: (value: String) => void;
  public touched: () => void;

  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value.toString();
    this.changed(value);
  }
}
