import React from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = ({ visible }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Determine the classes based on the `visible` prop
  const visibilityClass = visible ? 'flex' : 'hidden lg:flex';

  return (
    <div className={`${visibilityClass}`}>
      <ul className='flex gap-x-2'>
        <li>
          <button onClick={() => changeLanguage('en')} className='text-green hover:text-pink transition'>EN</button>
        </li>
        <li className='text-green hover:text-pink transition'> | </li>
        <li>
          <button onClick={() => changeLanguage('pt')} className='text-green hover:text-pink transition'>PT</button>
        </li>
      </ul>
    </div>
  );
};

ChangeLanguage.defaultProps = {
  visible: false, // By default, the component will be hidden on small screens
};

export default ChangeLanguage;
