import {RootState} from "../../store";
import {Priority} from "../../models/priority";

export interface SettingsState { notificationPriority: Priority;
}
export const initialState: SettingsState = { notificationPriority: "low",
};
export const settingsFeatureKey = "settings";
export interface SettingsRootState extends RootState { [settingsFeatureKey]: SettingsState;
}
