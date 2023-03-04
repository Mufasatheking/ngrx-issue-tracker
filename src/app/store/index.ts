import { ActionReducerMap } from "@ngrx/store";
import {IssueState} from "./issue/issue.state";
import {issueReducer} from "./issue/issue.reducer";

export interface RootState {
  issue: IssueState;
}
export const reducers: ActionReducerMap<RootState> = {
  issue: issueReducer,
};
