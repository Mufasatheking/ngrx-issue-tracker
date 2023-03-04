import { createAction, props } from '@ngrx/store';
import {Priority} from "../../models/priority";

export const settingsSettingss = createAction(
  '[Settings] Settings Settingss'
);

export const settingsSettingssSuccess = createAction(
  '[Settings] Settings Settingss Success',
  props<{ data: any }>()
);

export const settingsSettingssFailure = createAction(
  '[Settings] Settings Settingss Failure',
  props<{ error: any }>()
);

export const changeNotificationPriority = createAction( "[Settings] Change Notification Priority",
  props<{ notificationPriority: Priority }>());
