import Logo from '../assets/image/logo.svg';
import { Link } from 'react-router-dom';
import '../assets/style/header.scss';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__nav">
          <nav>
            <div className="nav__logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav__link">
              <Link to="/">Characters</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/episodes">Episodes</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
