import { Search } from "lucide-react";
import SearchField from "./SearchField";

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchField
        title="Where"
        subtitle="Search destinations"
      />

      <SearchField
        title="When"
        subtitle="Add dates"
      />

      <SearchField
        title="Who"
        subtitle="Add guests"
      />

      <button className="search-btn">
        <Search size={20} />
      </button>
    </div>
  );
}

export default SearchBar;