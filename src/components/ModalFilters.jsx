import { useEffect, useState } from 'react';
import styles from '../assets/style/modalfilters.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
const ModalFilters = ({
  setFilterGender,
  setFilterSpecies,
  setFilterStatus,
  setShowModal,
  filterGender,
  filterStatus,
  filterSpecies,
  showModal,
}) => {
  const [filterSpeciesModal, setFilterSpeciesModal] = useState(filterSpecies);
  const [filterGenderModal, setFilterGenderModal] = useState(filterGender);
  const [filterStatusModal, setFilterStatusModal] = useState(filterStatus);
  const ApplyFilters = () => {
    setFilterGender(filterGenderModal);
    setFilterSpecies(filterSpeciesModal);
    setFilterStatus(filterStatusModal);
    setShowModal(false);
    enableBodyScroll(document);
  };

  const ScrollActivated = () => {
    enableBodyScroll(document);
    setShowModal(false);
  };
  disableBodyScroll(document);
  return (
    <>
      <div onClick={() => ScrollActivated()} className={styles.background}></div>
      <div className={styles.modal}>
        <svg
          onClick={() => ScrollActivated()}
          className={styles.closeIcon}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="black"
            fillOpacity="0.54"
          />
        </svg>

        <h1>Filters</h1>
        <div className={styles.modal__option}>
          <div className={styles.filters_input}>
            <select
              className={styles.select}
              defaultValue={filterSpecies}
              onChange={(e) => setFilterSpeciesModal(e.target.value)}
              name="species"
              id="">
              <option defaultValue="">Species</option>
              <option defaultValue="human">Human</option>
              <option defaultValue="alien">Alien</option>
              <option defaultValue="humanoid">Humanoid</option>
            </select>
          </div>
          <div className={styles.filters_input}>
            <select
              className={styles.select}
              defaultValue={filterGender}
              onChange={(e) => setFilterGenderModal(e.target.value)}
              name="gender"
              id="">
              <option defaultValue="">Gender</option>
              <option defaultValue="male">Male</option>
              <option defaultValue="female">Female</option>
            </select>
          </div>
          <div className={styles.filters_input}>
            <select
              className={styles.select}
              defaultValue={filterStatus}
              onChange={(e) => setFilterStatusModal(e.target.value)}
              name="Status"
              id="">
              <option defaultValue="">Status</option>
              <option defaultValue="alive">Alive</option>
              <option defaultValue="dead">Dead</option>
              <option defaultValue="unknown">Unknown</option>
            </select>
          </div>
          <input
            className={styles.modalFiltersApplyButton}
            onClick={() => ApplyFilters()}
            type="button"
            defaultValue="APPLY"
          />
        </div>
      </div>
    </>
  );
};

export default ModalFilters;
