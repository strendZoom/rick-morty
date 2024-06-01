import searchIcon from '../assets/image/search-icon.svg';
const Filters = ({ setInputNamePerson }) => {
  return (
    <section className="section-filters">
      <div className="container">
        <div className="section-filters__input">
          <div className="filters-input">
            <img src={searchIcon} alt="icon-search" />
            <input
              onChange={(e) => setInputNamePerson(e.target.value)}
              placeholder="Filter by name..."
              name="name"
              type="text"
            />
          </div>
          <div className="filters-input">
            <select name="species" id="">
              <option defaultValue="gender">Species</option>
              <option defaultValue="human">Human</option>
              <option defaultValue="female">Female</option>
            </select>
          </div>
          <div className="filters-input">
            <select name="gender" id="">
              <option defaultValue="gender">Gender</option>
              <option defaultValue="male">Male</option>
              <option defaultValue="female">Female</option>
            </select>
          </div>
          <div className="filters-input">
            <select name="Status" id="">
              <option defaultValue="Status">Status</option>
              <option defaultValue="alive">Alive</option>
              <option defaultValue="dead">Dead</option>
              <option defaultValue="unknown">Unknown</option>
            </select>
          </div>
        </div>
        <div className="search__filters">
          <div className="filters__block">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z"
                fill="black"
                fillOpacity="0.54"
              />
            </svg>
            <input
              onChange={(e) => setInputNamePerson(e.target.value)}
              placeholder="Filter by name..."
              name="name"
              type="text"
            />
          </div>
        </div>
        <div className="button__filters">
          <div className="filters__block">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.688599 0V2H19.2788V0H0.688599ZM7.91811 12H12.0493V10H7.91811V12ZM16.1804 7H3.78696V5H16.1804V7Z"
                fill="black"
                fillOpacity="0.54"
              />
            </svg>

            <input type="button" defaultValue="ADVANCED FILTERS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
