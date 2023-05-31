import { InitialStateTypes } from "../types/InitialStateTypes";
import { ActionTypes, ReducerActionTypes } from "../types/ReducerActionTypes";

export function AppReducer(state: InitialStateTypes, action: ActionTypes) {
  switch (action.type) {
    case ReducerActionTypes.CONTACT_FORM:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          [action.field]: action.payload,
        },
      };
    case ReducerActionTypes.CLEAR_CONTACT_FORM:
      return {
        ...state,
        contactForm: {
          name: "",
          email: "",
          message: "",
        },
      };
    case ReducerActionTypes.ACTIVE_NAV:
      return {
        ...state,
        activeNav: action.payload,
      };
    case ReducerActionTypes.EMAIL_SENT:
      return {
        ...state,
        emailSent: !state.emailSent,
      };
    default:
      return state;
  }
}
