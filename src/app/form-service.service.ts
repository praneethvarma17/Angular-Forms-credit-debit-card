import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  public myFormData$ = new Subject<string>();

  emitData (data: string) {
    console.log('Im emitting', data)
    this.myFormData$.next(data);
    // this.myFormData$.subscribe(res=>{console.log(res)})
  }

  getData () {
    let data;

    return this.myFormData$
  }
}
