import {ActionReducer} from "@ngrx/store";

export const loggingMetaReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    console.log('current state', state);
    console.log('action', action);
    // execute the actual reducer
    const nextState = reducer(state, action);
    console.log('next state', nextState);
    return nextState;
  };
};
