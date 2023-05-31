import { FormEvent } from "react";
import { InitialStateTypes } from "./InitialStateTypes";
import { ActionTypes } from "./ReducerActionTypes";

export type ContextTypes = {
  state: InitialStateTypes;
  dispatch: React.Dispatch<ActionTypes>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => void;
  formRef: React.MutableRefObject<null>;
};
