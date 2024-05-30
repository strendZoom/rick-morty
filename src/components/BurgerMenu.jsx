import { Link } from 'react-router-dom';
import '../assets/style/header.scss';

const BurgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li>
          <Link to="/" className="menu__item">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/locations" className="menu__item">
            Locations
          </Link>
        </li>
        <li>
          <Link to="/episodes" className="menu__item">
            Episodes
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default BurgerMenu;
