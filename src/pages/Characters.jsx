import Filters from '../components/Filters';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import img from '../assets/image/rick&morty.svg';
import BurgerMenu from '../components/BurgerMenu';
import ModalFilters from '../components/ModalFilters';

const Characters = ({ api }) => {
  const [filterGender, setFilterGender] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [inputNamePerson, setInputNamePerson] = useState('');
  const [showModal, setShowModal] = useState(false);
  let [page, setPage] = useState(2);
  let [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${api}/character?${!inputNamePerson ? '' : `name=${inputNamePerson}&`}${
          filterGender == 'Gender' ? '' : `gender=${filterGender}&`
        }${filterSpecies == 'Species' ? '' : `species=${filterSpecies}&`}${
          filterStatus == 'Status' ? '' : `status=${filterStatus}&`
        }`,
      )
      .then((res) => setCharacters(res.data.results));
  }, [inputNamePerson, filterGender, filterSpecies, filterStatus]);

  const LoadPerson = () => {
    setPage(page + 1);
    axios
      .get(api + `/character?page=` + page)
      .then((res) => setCharacters([...characters, ...res.data.results]));
  };

  return (
    <>
      <Header />
      <BurgerMenu />
      <Banner img={img} />
      <Filters
        setFilterGender={setFilterGender}
        setFilterSpecies={setFilterSpecies}
        setFilterStatus={setFilterStatus}
        setInputNamePerson={setInputNamePerson}
        setShowModal={setShowModal}
      />
      {!showModal ? (
        ''
      ) : (
        <ModalFilters
          setFilterGender={setFilterGender}
          setFilterSpecies={setFilterSpecies}
          setFilterStatus={setFilterStatus}
          setInputNamePerson={setInputNamePerson}
          setShowModal={setShowModal}
          filterGender={filterGender}
          filterStatus={filterStatus}
          filterSpecies={filterSpecies}
          showModal={showModal}
        />
      )}
      <main>
        <div className="container">
          <div className="main__cards">
            <div className="cards-characters">
              {!characters ? (
                <h1>Loading</h1>
              ) : (
                characters.map((item) => (
                  <Link key={item.id} to={`/characters/${item.id}`}>
                    <div className="card">
                      <img src={item.image} alt="img" />
                      <div className="card__info">
                        <p>{item.name}</p>
                        <span>{item.species}</span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
            <div className="main__cards-button">
              <input onClick={() => LoadPerson()} type="button" value="LOAD MORE" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Characters;
