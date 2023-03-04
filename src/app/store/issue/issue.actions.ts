import {Issue} from "../../models/issue";
import {createAction, props} from "@ngrx/store";
import {randomId} from "../../util";

export const submit = createAction("[Issue] Submit", props<{ issue: Issue }>());
export const submitSuccess = createAction( "[Issue] Submit Success",
  props<{ issue: Issue }>()
);

export const resolve = createAction( "[Issue] Resolve",
  props<{ issueId: string }>()
);
export const submitFailure = createAction("[Issue] Submit Failure");
