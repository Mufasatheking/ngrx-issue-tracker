import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Priority} from "../models/priority";
import {Store} from "@ngrx/store";
import * as NotificationActions from './store/notification/notification.actions';
import * as fromNotification from './store/notification/notification.selectors';
import {SettingsRootState} from "./store";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  notificationPriority$: Observable<Priority>;
  constructor(private store: Store<SettingsRootState>) {
    this.notificationPriority$ = this.store.select(
      fromNotification.selectPriority );
  }
  changeNotificationPriority(notPriority: string): void {
    let priority = <Priority>notPriority
    this.store.dispatch(NotificationActions.changePriority({ priority }));
  }
}
