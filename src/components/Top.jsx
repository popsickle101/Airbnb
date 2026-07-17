import { useState } from "react";
import NavBar from "./Top/NavBar";
import SearchBar from "./Top/SearchBar";
import CategoryNav from "./Top/CategoryNav";

function Top({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) {
  const [dateRange, setDateRange] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState(0);

  return (
    <>
      <NavBar />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dateRange={dateRange}
        setDateRange={setDateRange}
        guests={guests}
        setGuests={setGuests}
      />
      <CategoryNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}

export default Top;
