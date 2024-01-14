import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FormServiceService } from '../form-service.service';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-display-widget',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AsyncPipe],
  // providers: [FormServiceService],
  templateUrl: './display-widget.component.html',
  styleUrl: './display-widget.component.scss'
})
export class DisplayWidgetComponent implements OnInit, OnDestroy {
  // public finalValue$: Observable<any>;
  mySubscription!: Subscription
  constructor(private formService: FormServiceService) { }

  ngOnInit() {
    // this.mySubscription = this.formService.myFormData$.subscribe({
    //   next: data => {console.log(data)}
    // })

    this.formService.myFormData$.subscribe((res)=>{console.log(res)})
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
  }
}
