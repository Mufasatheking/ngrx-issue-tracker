import {RootState} from "../index";
import {createSelector} from "@ngrx/store";
import {Issue} from "../../models/issue";
import {Filter, Issues} from "./issue.state";

export const selectFeature = (state: RootState) => state.issue;
export const selectEntities = createSelector(selectFeature,
  ({ entities }) => entities
);
export const selectAll = createSelector(selectEntities, (entities) => Object.values(entities)
);
export const selectFilter = createSelector(selectFeature,
  ({ filter }) => filter
);
export const selectFiltered = createSelector(selectAll,
  selectFilter,
  (issues: Issue[], { text }: Filter) => {
    if (text) {
      const lowercased = text.toLowerCase(); return issues.filter(
        ({ title, description }) => title.toLowerCase().includes(lowercased) || description.toLowerCase().includes(lowercased)
      );
    } else {
      return issues; }
  } );

export interface IssueStats {
  total: number;
  resolved: number;
}

export const selectStats = createSelector(selectAll,
  (issues): IssueStats => {
    const resolved = issues.filter((issue) => issue.resolved);
    return <IssueStats>{
      total: issues.length,
      resolved: resolved.length, };
    }
  );
export const selectOne = createSelector( selectEntities,
  (entities: Issues, id: string) => entities[id]
);

export const createSelectOne = () => createSelector(
  selectEntities,
  (entities: Issues, id: string) => entities[id] );
