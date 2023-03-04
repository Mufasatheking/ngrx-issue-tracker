import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {StoreModule} from "@ngrx/store";
import {notificationReducer} from "./store/notification/notification.reducer";
import {settingsFeatureKey, settingsReducers} from "./store";


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature(settingsFeatureKey, settingsReducers),
  ]
})
export class SettingsModule { }
