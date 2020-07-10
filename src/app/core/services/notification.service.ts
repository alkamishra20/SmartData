import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Notification } from "src/app/core/models/notification.model";

@Injectable()
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {
  }

  /**
   * @desc Displays Notification Messages
   * @param data - Message and type of notification to be shown
   */
  showNotification(data: Notification) {
    this.snackBar.open(data.msg, 'X', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: data.type
    });
  }

}
