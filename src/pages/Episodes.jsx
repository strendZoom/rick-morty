import Filters from '../components/Filters';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../assets/style/episodes.module.scss';
import { Link } from 'react-router-dom';

import img from '../assets/image/episodesBanner.svg';
import BurgerMenu from '../components/BurgerMenu';

const Episodes = ({ api }) => {
  const [inputNamePerson, setInputNamePerson] = useState('');
  let [page, setPage] = useState(2);
  let [episodes, setEpisodes] = useState([]);
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    axios
      .get(`${api}/episode?${!inputNamePerson ? '' : `name=${inputNamePerson}`}`)
      .then((res) => setEpisodes(res.data.results));
  }, [inputNamePerson]);
  const LoadPerson = () => {
    setPage(page + 1);
    axios
      .get(api + `/episode?page=` + page)
      .then((res) => setEpisodes([...episodes, ...res.data.results]))
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
            {!episodes
              ? '<h1>Loading</h1>'
              : episodes.map((e) => (
                  <Link key={e.id} to={`/episode/${e.id}`}>
                    <div className={styles.card}>
                      <p className={styles.card__name}>{e.name}</p>
                      <span className={styles.card__date}>{e.air_date}</span>
                      <span className={styles.card__episode}>{e.episode}</span>
                    </div>
                  </Link>
                ))}
          </div>
          <div className={styles.btn}>
            {activeButton ? (
              <input onClick={() => LoadPerson()} type="button" value="LOAD MORE" />
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

export default Episodes;
