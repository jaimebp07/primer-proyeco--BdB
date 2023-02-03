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

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void{
    console.log('Item ->', item.valueOf);
    this.newItemEvent.emit(item);
  }
}
