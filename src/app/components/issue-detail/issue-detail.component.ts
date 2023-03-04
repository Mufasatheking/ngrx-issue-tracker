import { Component } from '@angular/core';
import {Issue} from "../../models/issue";
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {selectOne} from "../../store/issue/issue.selectors";
import {Store} from "@ngrx/store";
import {RootState} from "../../store";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent {
  issue$: Observable<Issue |undefined>;

  constructor(private route: ActivatedRoute, private store: Store<RootState>) {
    this.issue$ = this.route.params.pipe(
      switchMap((params) => this.store.select(selectOne, params['id']))
    );
  }
}
