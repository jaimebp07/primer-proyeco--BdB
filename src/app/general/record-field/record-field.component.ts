import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-record-field',
  templateUrl: './record-field.component.html',
  styleUrls: ['./record-field.component.css']
})
export class RecordFieldComponent {
  @Input() description!: string;
  @Input() fieldType!: string;
  @Input() name!: string;
  @Input() idInput!: string;

  @Output() valueFieldInput = new EventEmitter<string>();

  takeValueInput(event: Event) {
    let valueItem =  (event.target as HTMLInputElement).value;
    this.valueFieldInput.emit(valueItem);
  }
 
}
