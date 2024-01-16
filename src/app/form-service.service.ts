import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class FormServiceService {

  public myFormData$ = new BehaviorSubject<any>( {name: "", cardNo: ""});

  emitData (data: any) {
    console.log('Im emitting', data)

    this.myFormData$.next(data);
  }
}
