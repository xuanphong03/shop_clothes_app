import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import RegisterForm from '../../features/Auth/components/FormRegister/RegisterForm';
import LoginForm from '../../features/Auth/components/FormLogin/LoginForm';

const NAVIGATIONS = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: '/products' },
  { id: 3, name: 'Contact', href: '/contact' },
];

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

function Header(props) {
  const [mode, setMode] = React.useState(MODE.LOGIN);
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleSetMode = (newMode) => {
    setMode(newMode);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <div className="relative">
      <div className="flex h-16 md:px-16 lg:px-32 xl:px-44 bg-slate-300 justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="font-bold text-4xl px-12 py-3 mr-4 text-red-500 hover:cursor-pointer"
          >
            LOGO
          </Link>
          <ul className="flex items-center justify-between">
            {NAVIGATIONS.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.href}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-md font-bold hover:bg-slate-200 hover:cursor-pointer uppercase ${
                    isActive ? 'text-blue-600' : ''
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <button onClick={handleOpenForm} className="flex   items-center px-3">
          <FaRegUser className="text-2xl mr-3" /> <span>Sign in</span>
        </button>
      </div>
      {openForm && (
        <div className="absolute top-0 bottom-0 left-0 right-0">
          {mode === 'login' ? (
            <LoginForm changeMode={handleSetMode} onClose={handleCloseForm} />
          ) : (
            <RegisterForm
              changeMode={handleSetMode}
              onClose={handleCloseForm}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
