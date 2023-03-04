import {initialState, Issues} from "./issue.state";
import {createReducer, on} from "@ngrx/store";
import {loadSuccess, resolve, submit, submitFailure, submitSuccess} from "./issue.actions";


export const issueReducer = createReducer(
  initialState,
  on(submit, (state) => {
    return { ...state, loading: true,
    }}),
  on(resolve, (state, { issueId }) =>
    {
      const issue = state.entities[issueId];
      return { ...state, entities: {
          ...state.entities,
          [issue.id]: issue, },
        loading: false, };
  }),
  on(submitSuccess, (state, { issue }) => {return {
    ...state, entities: {
      ...state.entities,
      [issue.id]: issue, },
  }; }),
  on(submitFailure, (state) => ({ ...state,
    loading: false,
  })),
  on(loadSuccess, (state, { issues }) => { const entities: Issues = {};
    issues.forEach((issue) => (entities[issue.id] = issue)); return {
      ...state, entities, loaded: true,
    }; })
);
