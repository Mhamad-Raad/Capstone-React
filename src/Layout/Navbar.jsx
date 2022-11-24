import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaSearchengin } from 'react-icons/fa';
import { TbArrowBackUp } from 'react-icons/tb';
import css from './Navbar.module.css';

export default function Navbar({ inputSearchHandler }) {
  const location = useLocation();
  let path;
  if (location.pathname === '/Games') {
    path = 'Home';
  } else if (location.pathname === '/Games/:id') {
    path = 'Details';
  }

  const backHandler = () => {
    window.history.back();
  };
  return (
    <div className={css.upbar}>
      {path === 'Home' ? (
        <h1 className={css.logo}>Games</h1>
      ) : (
        <button type="button" className={css.back_button} onClick={backHandler}>
          <TbArrowBackUp className={css.backicon} />
          Details
        </button>
      )}
      <div className={css.right}>
        {path === 'Home' ? (
          <>
            <input
              className={css.searchbar}
              type="text"
              onChange={inputSearchHandler}
            />
            <FaSearchengin className={css.searchbaricon} />
          </>
        ) : null}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  inputSearchHandler: PropTypes.func.isRequired,
};
