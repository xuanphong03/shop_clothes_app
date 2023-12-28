import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneEye, AiTwotoneEyeInvisible } from 'react-icons/ai';

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.object,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

function PasswordField({ name, label, placeholder, register, errorMessage }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  const handleHidePassword = () => {
    setShowPassword(false);
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          id={name}
          className="w-11/12 outline-none bg-transparent"
          placeholder={placeholder}
          {...register}
        />
        {!showPassword ? (
          <AiTwotoneEye
            className="text-xl cursor-pointer"
            onClick={handleShowPassword}
          />
        ) : (
          <AiTwotoneEyeInvisible
            className="text-xl cursor-pointer"
            onClick={handleHidePassword}
          />
        )}
      </div>
      {errorMessage && (
        <span className="text-sm text-red-500 ml-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default PasswordField;
