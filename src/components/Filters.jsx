import searchIcon from '../assets/image/search-icon.svg';
import filterList from '../assets/image/filter_list.svg';
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
          <img src={searchIcon} alt="icon-search" />
          <input
            onChange={(e) => setInputNamePerson(e.target.value)}
            placeholder="Filter by name..."
            name="name"
            type="text"
          />
        </div>
        <div className="button__filters">
          <img src={filterList} alt="icon" />
          <input type="button" defaultValue="ADVANCED FILTERS" />
        </div>
      </div>
    </section>
  );
};

export default Filters;
