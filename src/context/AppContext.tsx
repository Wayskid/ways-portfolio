import {
  FormEvent,
  ReactElement,
  createContext,
  useReducer,
  useRef,
} from "react";
import { AppReducer } from "../reducers/AppReducer";
import { InitialState } from "../reducers/InitialState";
import { ContextTypes } from "../types/ContextTypes";
import emailjs from "@emailjs/browser";
import { ReducerActionTypes } from "../types/ReducerActionTypes";

const AppContext = createContext<ContextTypes>({} as ContextTypes);

export function AppProvider({
  children,
}: {
  children: ReactElement | undefined;
}): React.JSX.Element {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const formRef = useRef(null);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .send(
        "service_0ho156e",
        "template_idj0jxb",
        {
          name: state.contactForm.name,
          email: state.contactForm.email,
          message: state.contactForm.message,
        },
        "zTkg27Ahp4AaPiT1q"
      )
      .then(
        () => {
          dispatch({ type: ReducerActionTypes.EMAIL_SENT });
          setTimeout(() => {
            dispatch({ type: ReducerActionTypes.EMAIL_SENT });
          }, 1000);
          dispatch({ type: ReducerActionTypes.CLEAR_CONTACT_FORM });
        },
        (error: any) => {
          console.log(error.message);
        }
      );
  }

  return (
    <AppContext.Provider value={{ state, dispatch, sendEmail, formRef }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
