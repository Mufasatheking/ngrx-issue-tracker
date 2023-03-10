/*
import {RootState} from "../index";
import {createSelector, select} from "@ngrx/store";
import {Issue} from "../../models/issue";
import {adapter, Filter, Issues} from "./issue.state";
import {pipe, skipWhile} from "rxjs";
import {Dictionary} from "@ngrx/entity";

export const selectFeature = (state: RootState) => state.issue;
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectFeature);

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
export const selectOne = createSelector(
  selectEntities,
  (entities: Dictionary<Issue>, id: string) => entities[id]
);

export const createSelectOne = () =>
  createSelector(
    selectEntities,
    (entities: Dictionary<Issue>, id: string) => entities[id]
  );

export const selectLoaded = createSelector( selectFeature,
  ({ loaded }) => loaded
);
export const selectAllLoaded = () => pipe(
  skipWhile((state: RootState) => !selectLoaded(state)),
  select(selectAll) );
*/

import {EntitySelectorsFactory} from "@ngrx/data";
import {Issue} from "../../models/issue";
import {createSelector} from "@ngrx/store";

export const { selectEntities, selectEntityMap,
} = new EntitySelectorsFactory().create<Issue>("Issue");
export const selectStats = createSelector( selectEntities,
  (issues): IssueStats => {
    const resolved = issues.filter((issue) => issue.resolved);
    return {
      total: issues.length, resolved: resolved.length,
    }; }
);
export const selectActiveId = fromRouter.selectRouteParam("id");
export const selectActive = createSelector( selectEntityMap,
  selectActiveId,
  (entities, id) => entities[id]
);
