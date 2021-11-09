import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Toast } from 'src/app/interfaces/toast';

import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {

  private toastSubscription: Subscription;

  private _toast: Toast = {
    active: false,
    type: '',
    mensage: '',
  };
  get toast() {
    return this._toast;
  }

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastSubscription = this.toastService.getToast()
    .subscribe((toast) => {
      this._toast = toast;
      this.closeToast();
      console.log(toast);
    });

  }

  ngOnDestroy(): void {
    if (this.toastSubscription) {
      this.toastSubscription.unsubscribe();
    }
  }

  closeToast() {
    if (this._toast.active) {
      setTimeout(() => {
        this.toastService.setToast({
          active: false,
          mensage: '',
          type: ''
        });
      }, 7000);
    }
  }
}
