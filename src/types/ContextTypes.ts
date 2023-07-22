import { Dispatch, SetStateAction } from "react";

export type ContextTypes = {
  introInView: Boolean;
  setIntroInView: Dispatch<SetStateAction<boolean>>;
};
