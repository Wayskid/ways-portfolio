import {
  FormEvent,
  ReactElement,
  createContext,
  useReducer,
  useRef,
  useState,
} from "react";
import { AppReducer } from "../reducers/AppReducer";
import { InitialState } from "../reducers/InitialState";
import { ContextTypes } from "../types/ContextTypes";
// import emailJs from "emailjs";

const AppContext = createContext<ContextTypes>({} as ContextTypes);

export function AppProvider({
  children,
}: {
  children: ReactElement | undefined;
}): React.JSX.Element {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef(null);

  function sendEmail(e: FormEvent) {
    e.preventDefault();

    // emailJs
    //   .sendForm(
    //     "service_xntj62j",
    //     "template_idj0jxb",
    //     formRef.current,
    //     "zTkg27Ahp4AaPiT1q"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setShowSuccess(true);
    //       setTimeout(() => {
    //         setShowSuccess(false);
    //       }, 1000);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    // e.target.reset();
  }

  return (
    <AppContext.Provider value={{ state, dispatch, sendEmail, formRef }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
