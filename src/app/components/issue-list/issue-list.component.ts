import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Issue} from "../../models/issue";
import {Store} from "@ngrx/store";
import {RootState} from "../../store";
import {selectAllLoaded, selectFiltered} from "../../store/issue/issue.selectors";
import { resolve } from 'src/app/store/issue/issue.actions';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {
  issues$: Observable<Issue[]>;
  constructor(private store: Store<RootState>) {
    this.issues$ = this.store.select(
      selectFiltered
    );
  }
  resolve(issue: Issue): void { this.store.dispatch(
    resolve({ issueId: issue.id }));
  }
}
