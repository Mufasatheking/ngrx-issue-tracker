import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, filter, map, mergeMap, of, tap} from "rxjs";
import {Issue} from "../../models/issue";
import * as IssueActions from "./issue.actions";
import * as fromIssue from "./issue.selectors";
import {withLatestFromDeferred} from "../../util";
import {IssueService} from "../../services/issue.service";
import {Store} from "@ngrx/store";
import {RootState} from "../index";
import {submitFailure} from "./issue.actions";


@Injectable()
export class IssueEffects {
  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.submit),
      mergeMap((action) =>
        this.issues.save(action.issue).pipe(
          map((issue) =>
            IssueActions.submitSuccess({ issue })),
          catchError(() => of(IssueActions.submitFailure()))))))


  constructor(
    private action$: Actions,
    private issues: IssueService,
    private store: Store<RootState>
  ) {}
}
