export const enum ReducerActionTypes {
  CONTACT_FORM,
  CLEAR_CONTACT_FORM,
  ACTIVE_NAV,
  EMAIL_SENT,
}

export interface ActionTypes {
  type: ReducerActionTypes;
  payload?: any;
  field?: any;
}
