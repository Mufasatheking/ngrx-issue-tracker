import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {IssueStats, selectAll, selectStats} from "./store/issue/issue.selectors";
import {RootState} from "./store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stats$: Observable<IssueStats>;
  title = 'ngrx-issue-tracker';
  constructor(private store: Store<RootState>) {
    this.stats$ = this.store.select(selectStats);
  }
}
