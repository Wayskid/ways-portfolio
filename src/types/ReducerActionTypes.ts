export const enum ReducerActionTypes {
  CONTACT_FORM,
  ACTIVE_NAV,
}

export interface ActionTypes {
  type: ReducerActionTypes;
  payload: any;
  field?: any;
}
