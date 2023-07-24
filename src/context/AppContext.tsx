import { ReactElement, createContext, useState } from "react";
import { ContextTypes } from "../types/ContextTypes";

const AppContext = createContext<ContextTypes>({} as ContextTypes);

export function AppProvider({
  children,
}: {
  children: ReactElement | undefined;
}): React.JSX.Element {
  const [introInView, setIntroInView] = useState(false);

  return (
    <AppContext.Provider value={{ introInView, setIntroInView }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
