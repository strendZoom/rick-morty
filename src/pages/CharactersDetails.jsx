import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/style/characters-deteils.modules.scss';
import arrow from '../assets/image/arrow-to.svg';
import ButtonGoBack from '../components/ButtonGoBack';
import BurgerMenu from '../components/BurgerMenu';

const CharactersDetails = ({ api }) => {
  const page = '/';
  const params = useParams();
  const [idPerson, setIdPerson] = useState(params.id);
  const [person, setPerson] = useState([]);
  const [episodesList, setEpisodesList] = useState([]);
  let [episodesInfo, setEpisodesInfo] = useState([]);

  useEffect(() => {
    const LoadPersonInfo = async () => {
      const res = await axios.get(`${api}/character/${idPerson}`);
      setPerson([res.data]);
    };
    LoadPersonInfo();
  }, [episodesList]);

  useEffect(() => {
    const LoadEpisode = async () => {
      let size = 1;
      let arrayEpisodes = [];
      for (let i = 0; i < Math.ceil(person[0].episode.length / size); i++) {
        episodesList[i] = person[0].episode.slice(i * size, i * size + size);
        const res = await axios.get(`${episodesList[i]}`);
        arrayEpisodes.push(res.data);
      }
      setEpisodesInfo(arrayEpisodes);
    };
    LoadEpisode();
  }, [person]);

  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <div className="container">
          <ButtonGoBack page={page} />
          {!person
            ? 'Loading'
            : person.map((item) => (
                <div key={item.id} className="characters">
                  <div className="characters__avatar">
                    <img src={item.image} alt="characters" />
                  </div>
                  <div className="characters__name">
                    <p>{item.name}</p>
                  </div>
                  <div className="characters__block-info">
                    <div className="block-info">
                      <span>Informations</span>
                      <div className="block-info__items">
                        <p>Gender</p>
                        <span>{item.gender}</span>
                      </div>
                      <div className="block-info__items">
                        <p>Status</p>
                        <span>{item.status}</span>
                      </div>
                      <div className="block-info__items">
                        <p>Specie</p>
                        <span>{item.species}</span>
                      </div>
                      <div className="block-info__items">
                        <p>Origin</p>
                        <span>{item.origin.name}</span>
                      </div>
                      <div className="block-info__items">
                        <p>Type</p>
                        <span>{!item.type ? 'empty' : item.type}</span>
                      </div>
                      <div className="block-info__items">
                        <p>Location</p>
                        <span>{item.location.name}</span>
                      </div>
                    </div>
                    <div className="block-info">
                      <span>Episodes</span>
                      {!episodesInfo
                        ? 'loading'
                        : episodesInfo.map((ep) => (
                            <Link key={ep.id} to={`/episode/${ep.id}`}>
                              <div className="block-info__items-episodes">
                                <div className="block-info__items--left">
                                  <p>{ep.episode}</p>
                                  <span>{ep.name}</span>
                                  <span className="block-info__items--date">{ep.air_date}</span>
                                </div>
                                <div className="block-info__items--arrow">
                                  <img src={arrow} alt="arrow" />
                                </div>
                              </div>
                            </Link>
                          ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CharactersDetails;
