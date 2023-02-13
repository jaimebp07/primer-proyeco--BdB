import { Component } from '@angular/core';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent {
  faXmarkIcon = faXmark;
}
