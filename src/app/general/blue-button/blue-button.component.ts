import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.css']
})
export class BlueButtonComponent {
  @Input() label!: String;
  @Input() route!: String;
  @Input() type!: String;

  
}
