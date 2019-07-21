import * as ErrorMessages from './error-messages';

export const required = (text: string) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (otherField: string, otherFieldLabel: string) => {
  return (text: string, state: any) => {
    return state[otherField] === text
      ? null
      : ErrorMessages.mustMatch(otherFieldLabel);
  };
};

export const minLength = (length: number) => {
  return (text: string) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};

export const isEmail = (text: string) => {
  // tslint:disable-next-line: max-line-length
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(text.toLocaleLowerCase())) {
    return null;
  } else {
    return ErrorMessages.isEmail;
  }
};
