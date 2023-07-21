import {
  ReactElement,
  createContext,
  useReducer,
} from "react";
import { AppReducer } from "../reducers/AppReducer";
import { InitialState } from "../reducers/InitialState";
import { ContextTypes } from "../types/ContextTypes";

const AppContext = createContext<ContextTypes>({} as ContextTypes);

export function AppProvider({
  children,
}: {
  children: ReactElement | undefined;
}): React.JSX.Element {

  const [state, dispatch] = useReducer(AppReducer, InitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
