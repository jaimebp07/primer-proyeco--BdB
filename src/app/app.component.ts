import { Component } from '@angular/core';
import {faXbox} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto-BdB';
  faXboxicon = faXbox; 
}
