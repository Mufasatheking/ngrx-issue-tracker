/*
import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, filter, map, mergeMap, of, switchMap, tap} from "rxjs";
import {Issue} from "../../models/issue";
import * as IssueActions from "./issue.actions";
import * as fromIssue from "./issue.selectors";
import {withLatestFromDeferred} from "../../util";
import {IssueService} from "../../services/issue.service";
import {Action, Store} from "@ngrx/store";
import {RootState} from "../index";
import {submitFailure} from "./issue.actions";
import {NotificationService} from "../../services/notification.service";


@Injectable()
export class IssueEffects implements OnInitEffects{
  ngrxOnInitEffects(): Action {
    return IssueActions.load();
  }
  load$ = createEffect(() => this.action$.pipe(
    ofType(IssueActions.load),
    switchMap(() => this.issues.getAll()),
    map((issues) => IssueActions.loadSuccess({ issues }))
  ) );
  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.submit),
      mergeMap((action) =>
        this.issues.save(action.issue).pipe(
          map((issue) =>
            IssueActions.submitSuccess({ issue })),
          catchError(() => of(IssueActions.submitFailure()))))))
  notification$ = createEffect( () =>
      this.action$.pipe( ofType(IssueActions.submitSuccess), tap(({ issue }) => {
        this.notifications.info(`Issue submitted: ${issue.title}`); })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private issues: IssueService,
    private store: Store<RootState>,
    private notifications: NotificationService
  ) {}
}
*/
