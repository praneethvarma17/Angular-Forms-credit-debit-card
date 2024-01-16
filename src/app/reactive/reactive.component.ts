import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {

  constructor( public formService: FormServiceService) {}
  cardDetails = new FormGroup({
    cardNo : new FormControl(),
    name: new FormControl()
  })

  entered($event: any) {
    const formData = {
      cardNo: this.cardDetails.get('cardNo')?.value,
      name: this.cardDetails.get('name')?.value
    }
    this.formService.emitData(formData);
  }

  formatCardNumber() {
    let value = this.cardDetails.get('cardNo')?.value;
    value = value.replace(/-/g, ''); // Remove existing spaces
    const formattedValue = value.replace(/(\d{4})/g, '$1-').replace(/-$/g,'');
    this.cardDetails.get('cardNo')?.setValue(formattedValue);
  }
}
