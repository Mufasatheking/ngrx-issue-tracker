import { initialState } from "./issue.state";
import * as IssueActions from "./issue.actions";
import {createReducer, on} from "@ngrx/store";
import {blah, submit} from "./issue.actions";


export const issueReducer = createReducer(
  initialState,
  on(submit, (state, { issue }) =>
       ({
        ...state,
        entities: {
          ...state.entities, [issue.id]: {
            ...issue,
            resolved: false,
          },
        },
      })
  )
);
