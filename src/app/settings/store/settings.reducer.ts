import { createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export const settingsFeatureKey = 'settings';

export interface State {

}

export const initialState: State = {

};

export const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.settingsSettingss, state => state),
  on(SettingsActions.settingsSettingssSuccess, (state) => state),
  on(SettingsActions.settingsSettingssFailure, (state) => state),
  on(
    SettingsActions.changeNotificationPriority, (state, { notificationPriority }) => ({
      ...state,
      notificationPriority, })
  )
);
