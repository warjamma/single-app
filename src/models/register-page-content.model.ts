/* eslint-disable camelcase */

export interface IAgentCodeDomain {
  domains?: string; // separate by comma, set domains undefined if want use default
  code?: string;
}

export interface IRegisterPageContent {
  title?: string;
  background?: string;
  errorNotBlank?: string;
  errorInvalidPhoneNumber?: string;
  storeShareLinkCode?: string;
  defaultAgentCode?: string;
  buttonSubmit?: string;

  labelEmail?: string;
  placeholderEmail?: string;
  defaultEmail?: string;
  errorEmail?: string;

  labelFullName?: string;
  placeholderFullName?: string;
  defaultFullName?: string;
  errorFullName?: string;

  labelUsername?: string;
  placeholderUsername?: string;
  defaultUsername?: string;
  errorUsername?: string;

  labelPassword?: string;
  placeholderPassword?: string;
  defaultPassword?: string;
  errorPassword?: string;

  labelConfirmPassword?: string;
  placeholderConfirmPassword?: string;
  defaultConfirmPassword?: string;
  errorConfirmPassword?: string;

  labelCode?: string;
  placeholderCode?: string;
  defaultCode?: string;
  errorCode?: string;
}
