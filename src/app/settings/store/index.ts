import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import {RootState} from "../../store";
import {profileReducer} from "./profile/profile.reducer";
import {notificationReducer} from "./notification/notification.reducer";
import {ProfileState} from "./profile/profile.state";
import {NotificationState} from "./notification/notification.state";

export interface SettingsState {
  notification: NotificationState;
  profile: ProfileState;
}

export const settingsReducers: ActionReducerMap<SettingsState> = {
  notification: notificationReducer,
  profile: profileReducer,
};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
  [settingsFeatureKey]: SettingsState;
}

export const selectFeature = createFeatureSelector<
  SettingsRootState,
  SettingsState
  >(settingsFeatureKey);
