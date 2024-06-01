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
  const page = '/locations';
  const params = useParams();
  const [idLocation, setIdLocation] = useState(params.id);
  const [locationInfo, setlocationInfo] = useState([]);
  const [locationPerson, setLocationPerson] = useState([]);

  useEffect(() => {
    const LoadLocationInfo = async () => {
      const res = await axios.get(`${api}/location/${idLocation}`);
      setlocationInfo([res.data]);
    };
    LoadLocationInfo();
  }, [idLocation]);

  useEffect(() => {
    const LoadPerson = async () => {
      let size = 1;
      let arrayPerson = [];
      for (let i = 0; i < Math.ceil(locationInfo[0].residents.length / size); i++) {
        locationPerson[i] = locationInfo[0].residents.slice(i * size, i * size + size);
        const res = await axios.get(`${locationPerson[i]}`);
        arrayPerson.push(res.data);
      }
      setLocationPerson(arrayPerson);
    };

    LoadPerson();
  }, [locationInfo]);

  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <div className="container">
          <ButtonGoBack page={page} />
          {!locationInfo
            ? 'Loading'
            : locationInfo.map((item) => (
                <div key={item.id} className={styles.episode}>
                  <div className={styles.episode__name}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.episode__info}>
                    <div className={styles.episode__series}>
                      <p>Type</p>
                      <span>{item.type}</span>
                    </div>
                    <div className={styles.episode__date}>
                      <p>Dimension</p>
                      <span>{item.dimension}</span>
                    </div>
                  </div>
                  <h3 className={styles.person__title}>Residents</h3>
                </div>
              ))}
          <div className="main__cards">
            <div className="cards-characters">
              {!locationPerson
                ? 'loading'
                : locationPerson.map((e) => (
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
