import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  cardDetails = new FormGroup({
    cardNo : new FormControl()
  })
}
