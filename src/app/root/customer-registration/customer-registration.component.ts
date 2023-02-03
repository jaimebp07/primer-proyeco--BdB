import { Component } from '@angular/core';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  faPenSquareIcon = faPenToSquare;
}
