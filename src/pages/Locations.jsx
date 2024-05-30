import Filters from '../components/Filters';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../assets/style/episodes.module.scss';
import img from '../assets/image/locationsBanner.svg';
import { Link } from 'react-router-dom';
import BurgerMenu from '../components/BurgerMenu';

const Locations = ({ api }) => {
  const [inputNamePerson, setInputNamePerson] = useState('');
  let [page, setPage] = useState(2);
  let [location, setLocation] = useState([]);
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    axios
      .get(`${api}/location?${!inputNamePerson ? '' : `name=${inputNamePerson}`}`)
      .then((res) => setLocation(res.data.results));
  }, [inputNamePerson]);

  const LoadLocation = () => {
    setPage(page + 1);
    axios
      .get(api + `/location?page=` + page)
      .then((res) => setLocation([...location, ...res.data.results]))
      .catch((err) => {
        setActiveButton(!activeButton);
      });
    console.log(activeButton);
  };

  return (
    <>
      <Header />
      <BurgerMenu />
      <Banner img={img} />
      <Filters setInputNamePerson={setInputNamePerson} />
      <main>
        <div className="container">
          <div className={styles.root}>
            {!location
              ? '<h1>Loading</h1>'
              : location.map((e) => (
                  <Link key={e.id} to={`/location/${e.id}`}>
                    <div className={styles.card}>
                      <p className={styles.card__name}>{e.name}</p>
                      <span className={styles.card__date}>{e.type}</span>
                    </div>
                  </Link>
                ))}
          </div>
          <div className={styles.btn}>
            {activeButton ? (
              <input onClick={() => LoadLocation()} type="button" value="LOAD MORE" />
            ) : (
              <input className={styles.btn_disabled} type="button" value="List Empty" />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Locations;
