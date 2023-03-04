/*
import {Issue} from "../../models/issue";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export interface Issues {
  [id: string]: Issue;
}
export interface Filter {
  text: string;
}
export interface IssueState extends EntityState<Issue> {
  filter: Filter;
  loaded: boolean;
  loading: boolean;
}
export const adapter = createEntityAdapter<Issue>();
export const initialState: IssueState = adapter.getInitialState({ filter: {
    text: "", },
  loaded: false,
  loading: false, });
*/
