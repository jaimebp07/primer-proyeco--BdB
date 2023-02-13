import { Component, Input } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  @Input() customerNames!: string;
  @Input() surnames!: string;
  @Input() placeOfBirth!: string;
  faTrash = faTrash;
  faPen = faPen;
}
