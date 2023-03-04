import { initialState } from "./issue.state";
import {createReducer, on} from "@ngrx/store";
import {resolve, submit} from "./issue.actions";


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
  ),
  on(resolve, (state, { issueId }) =>
    {
      const issue = state.entities[issueId];
      return { ...state, entities: {
      ...state.entities, [issueId]: {
        ...issue,
        resolved: true, },
    }, };
  })
);
