import {adapter, initialState, Issues} from "./issue.state";
import {createReducer, on} from "@ngrx/store";
import {loadSuccess, resolve, submit, submitFailure, submitSuccess} from "./issue.actions";


export const issueReducer = createReducer(
  initialState,
  on(submit, (state) => {
    return { ...state, loading: true,
    }}),
  on(resolve, (state, { issueId }) => adapter.mapOne(
    {
      id:issueId,
      map: (issue) => ({ ...issue, resolved: true,
      }), },
    state )
  ),
  on(submitSuccess, (state, { issue }) => adapter.addOne(issue, state)),
  on(submitFailure, (state) => ({ ...state,
    loading: false,
  })),
  on(loadSuccess, (state, { issues }) => ({
    ...adapter.setAll(issues, state),
    loaded: true, }))
);
