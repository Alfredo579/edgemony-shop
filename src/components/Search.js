// import { ReactComponent as IconSearch } from "../icons/search.svg";

import "./Search.css";

function Search({ onSearch }) {
  return (
    <div className="Search">
      {/* <IconSearch /> */}
      <input
        className="search-input"
        type="search"
        placeholder="Search here..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}



export default Search;