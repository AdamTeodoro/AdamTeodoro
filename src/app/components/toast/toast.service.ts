import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from 'src/app/interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private observeToast = new BehaviorSubject<Toast>({
    mensage: '',
    active: false,
    type: ''
  });

  constructor() { }

  getToast() {
    return this.observeToast;
  }

  setToast(toast: Toast) {
    this.observeToast.next(toast);
  }

  success(mensage: string) {
    return this.setToast({
      mensage,
      active: true,
      type: 'success'
    });
  }

  danger(mensage: string) {
    return this.setToast({
      mensage,
      active: true,
      type: 'danger'
    });
  }
}
