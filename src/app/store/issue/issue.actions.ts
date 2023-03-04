import {Issue} from "../../models/issue";
import {createAction, props} from "@ngrx/store";
import {randomId} from "../../util";

export const submit = createAction("[Issue] Submit", (issue: Issue) => {
  return {
  issue: {
    ...issue,
    id: randomId(),
  }, };
});

export const blah = createAction("[Issue] Blah");
