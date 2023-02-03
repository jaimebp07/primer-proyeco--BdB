import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-information-field',
  templateUrl: './date-information-field.component.html',
  styleUrls: ['./date-information-field.component.css']
})
export class DateInformationFieldComponent {
  @Input() description!: string;
  @Input() fieldType!: string;
}
