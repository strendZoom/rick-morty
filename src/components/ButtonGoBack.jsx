import { Link } from 'react-router-dom';
import arrowBack from '../assets/image/arrow-back.svg';
import styles from '../assets/style/arrow-back.module.scss';

const ButtonGoBack = (page) => {
  return (
    <Link to={page.page}>
      <div className={styles.root}>
        <img src={arrowBack} alt="arrowBack" />
        <h3>GO TO BACK</h3>
      </div>
    </Link>
  );
};

export default ButtonGoBack;
