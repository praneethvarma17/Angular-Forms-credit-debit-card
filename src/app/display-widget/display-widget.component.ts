import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FormServiceService } from '../form-service.service';
import { Observable, Subscribable, Subscription, Subject } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

import { AsyncPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-display-widget',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AsyncPipe, CommonModule],
  templateUrl: './display-widget.component.html',
  styleUrl: './display-widget.component.scss'
})
export class DisplayWidgetComponent implements OnInit, OnDestroy {
  // public finalValue$: Observable<any>;
  mySubscription!: Subscription
  myProducts!: Observable<any>;
  constructor(public formService: FormServiceService) {
    this.myProducts = this.formService.myFormData$
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
  }
}
