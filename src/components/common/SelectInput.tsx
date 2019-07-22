import React from 'react';

export interface IOption {
  value: any;
  text: string;
}

interface ISelectInputProps {
  name: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  defaultOption?: string;
  value?: string | number;
  required?: boolean;
  error?: string;
  options: IOption[];
}

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  required,
  error,
  options
}: ISelectInputProps) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field input-group">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {required && (
          <div className="input-group-append">
            <span className="input-group-text">*</span>
          </div>
        )}
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectInput;
