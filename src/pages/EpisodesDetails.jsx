import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ButtonGoBack from '../components/ButtonGoBack';
import styles from '../assets/style/episode-deteils.module.scss';
import '../assets/style/characters-deteils.modules.scss';
import BurgerMenu from '../components/BurgerMenu';

const CharactersDetails = ({ api }) => {
  const page = '/episodes';
  const params = useParams();
  const [idEpisode, setIdEpisode] = useState(params.id);
  const [episodeInfo, setEpisodeInfo] = useState([]);
  const [episodesPerson, setEpisodesPerson] = useState([]);

  useEffect(() => {
    const LoadPersonInfo = async () => {
      const res = await axios.get(`${api}/episode/${idEpisode}`);
      setEpisodeInfo([res.data]);
    };
    LoadPersonInfo();
  }, [idEpisode]);

  useEffect(() => {
    const LoadPerson = async () => {
      let size = 1;
      let arrayPerson = [];
      for (let i = 0; i < Math.ceil(episodeInfo[0].characters.length / size); i++) {
        episodesPerson[i] = episodeInfo[0].characters.slice(i * size, i * size + size);
        const res = await axios.get(`${episodesPerson[i]}`);
        arrayPerson.push(res.data);
        console.log(arrayPerson);
      }
      setEpisodesPerson(arrayPerson);
    };

    LoadPerson();
  }, [episodeInfo]);

  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <div className="container">
          <ButtonGoBack page={page} />
          {!episodeInfo
            ? 'Loading'
            : episodeInfo.map((item) => (
                <div key={item.id} className={styles.episode}>
                  <div className={styles.episode__name}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.episode__info}>
                    <div className={styles.episode__series}>
                      <p>Episode</p>
                      <span>{item.episode}</span>
                    </div>
                    <div className={styles.episode__date}>
                      <p>Date</p>
                      <span>{item.air_date}</span>
                    </div>
                  </div>
                  <h3 className={styles.person__title}>Cast</h3>
                </div>
              ))}
          <div className="main__cards">
            <div className="cards-characters">
              {!episodesPerson
                ? 'loading'
                : episodesPerson.map((e) => (
                    <Link key={e.id} to={`/characters/${e.id}`}>
                      <div className="card">
                        <img src={e.image} alt="img" />
                        <div className="card__info">
                          <p>{e.name}</p>
                          <span>{e.species}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CharactersDetails;
