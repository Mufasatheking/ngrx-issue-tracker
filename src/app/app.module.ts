import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
//import { CounterComponent } from './components/counter/counter.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {modules} from "./modules/modules";
import {reducers} from "./store/index";
import { IssuesComponent } from './components/issues/issues.component';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import {EffectsModule} from "@ngrx/effects";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {DatabaseService} from "./services/database.service";
import { IssueEffects } from './store/issue/issue.effects';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NewIssueComponent,
    IssueListComponent,
    IssueDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([IssueEffects]),
        modules,
        ReactiveFormsModule,
        InMemoryWebApiModule.forRoot(DatabaseService),
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
