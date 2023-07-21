import { InitialStateTypes } from "./InitialStateTypes";
import { ActionTypes } from "./ReducerActionTypes";

export type ContextTypes = {
  state: InitialStateTypes;
  dispatch: React.Dispatch<ActionTypes>;
};
