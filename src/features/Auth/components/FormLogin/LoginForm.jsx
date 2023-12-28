import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PropTypes from 'prop-types';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import InputField from '../../../../components/InputField/InputField';
import PasswordField from '../../../../components/PasswordField/PasswordField';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  changeMode: PropTypes.func,
  onClose: PropTypes.func,
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),
  password: yup.string().required('Please enter your password.'),
});

function LoginForm({ changeMode, onClose, onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChangeMode = () => {
    if (changeMode) {
      changeMode('register');
    }
  };

  const handleCloseForm = () => {
    if (onClose) {
      onClose();
    }
  };

  const formSubmit = async (data) => {
    console.log(data);
    if (onSubmit) {
      await onSubmit(data);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className=" bg-white w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="relative p-6 space-y-4 md:space-y-6 sm:p-8">
          <IoCloseOutline
            onClick={handleCloseForm}
            className="absolute top-2 right-2 rounded z-10 text-3xl cursor-pointer hover:bg-slate-300"
          />
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(formSubmit)}
          >
            <InputField
              name="email"
              label="Your email"
              placeholder="Enter your email..."
              register={{ ...register('email') }}
              errorMessage={errors.email?.message}
            />

            <PasswordField
              name="password"
              label="Password"
              placeholder="••••••••"
              register={{ ...register('password') }}
              errorMessage={errors.password?.message}
            />

            <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Do you have an account ?
              <span
                onClick={handleChangeMode}
                className="font-medium ml-2 text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
