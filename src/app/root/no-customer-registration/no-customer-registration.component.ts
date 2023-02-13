import { Component } from '@angular/core';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-customer-registration',
  templateUrl: './no-customer-registration.component.html',
  styleUrls: ['./no-customer-registration.component.css']
})
export class NoCustomerRegistrationComponent {
  faPenSquareIcon = faPenToSquare;
}
