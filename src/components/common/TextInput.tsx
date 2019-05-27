import React from 'react';

interface ITextInputProps {
  name: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean
  error?: string;
}

const TextInput = ({ name, label, onChange, placeholder, value, required, error }: ITextInputProps) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field input-group">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {required &&
          <div className="input-group-append">
            <span className="input-group-text">*</span>
          </div>
        }
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
