
export const isRequired = (fieldName: string) => `${fieldName} is required`;

export const mustMatch = (otherFieldName: string) => {
  return (fieldName: string) => `${fieldName} must match ${otherFieldName}`;
};

export const minLength = (length: number) => {
  return (fieldName: string) => `${fieldName} must be at least ${length} characters`;
};

export const isEmail = (fieldName: string) => `${fieldName} is not a valid email address`;

