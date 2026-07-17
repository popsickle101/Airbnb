import { Search } from "lucide-react";
import SearchField from "./SearchField";

function SearchBar({ searchQuery, setSearchQuery, dateRange, setDateRange, guests, setGuests }) {
  return (
    <div className="search-bar">
      <SearchField
        title="Where"
        subtitle="Search destinations"
        type="where"
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <SearchField
        title="When"
        subtitle="Add dates"
        type="when"
        value={dateRange}
        onChange={setDateRange}
      />

      <SearchField
        title="Who"
        subtitle="Add guests"
        type="who"
        value={guests}
        onChange={setGuests}
      />

      <button className="search-btn">
        <Search size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
