export class FieldValidation {
  /**
   * Instantiates a FieldValidation Object
   * @param name name of the field to validate
   * @param label text used in the validation message (usually the field label)
   * @param validations array of validations to perform against the field
   */
  constructor(
    public name: string,
    public label: string,
    public validations: any[]
  ) {}
}

// export const validationRunner = (name: string, label: string, ...rules: any[]) => {
const validationThunk = (fieldValidation: FieldValidation) => {
  return (state: any) => {
    const { name, label, validations } = fieldValidation;
    for (const v of validations) {
      const errorMessageFunc = v(state[name], state);
      if (errorMessageFunc) {
        return { [name]: errorMessageFunc(label) };
      }
    }
    return {};
  };
};

/**
 *
 * @param state object to validate
 * @param validations array of validations to be performed
 * @returns errors object containing any validation messages
 */
export const validate = (state: any, validations: FieldValidation[]) => {
  const validators = validations.map((f: FieldValidation) => {
    return validationThunk(f);
  });
  return validators.reduce((memo: any, validator: any) => {
    return Object.assign(memo, validator(state));
  }, {});
};
