import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Priority} from "../models/priority";
import {Store} from "@ngrx/store";
import * as fromSettings from './store/settings.selectors';
import * as SettingsActions from './store/settings.actions';
import {SettingsRootState} from "./store/settings.state";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  notificationPriority$: Observable<Priority>;
  constructor(private store: Store<SettingsRootState>) {
    this.notificationPriority$ = this.store.select(
    fromSettings.selectNotificationPriority );
  }
  changeNotificationPriority(notPriority: string): void {
    let notificationPriority = <Priority>notPriority
    this.store.dispatch(
    SettingsActions.changeNotificationPriority({ notificationPriority }) );
  }
}
