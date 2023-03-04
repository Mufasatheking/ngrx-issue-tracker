import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Issue} from "../../models/issue";
import {Store} from "@ngrx/store";
import {RootState} from "../../store";
import * as fromIssue from "../../store/issue/issue.selectors";
import {selectAll} from "../../store/issue/issue.selectors";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {
  issues$: Observable<Issue[]>;
  constructor(private store: Store<RootState>) {
    this.issues$ = this.store.select(selectAll);
  }
}
