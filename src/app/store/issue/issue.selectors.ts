import {RootState} from "../index";

export const selectAll = (state: RootState) => Object.values(state.issue.entities);
