import PropTypes from 'prop-types';
import React from 'react';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.object,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

function InputField({ name, label, register, placeholder, errorMessage }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...register}
      />
      {errorMessage && (
        <span className="text-sm text-red-500 ml-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputField;
