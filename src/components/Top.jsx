import NavBar from "./Top/NavBar";
import SearchBar from "./Top/SearchBar";
import CategoryNav from "./Top/CategoryNav";

function Top({ selectedCategory, setSelectedCategory }) {
  return (
    <>
      <NavBar />
      <SearchBar />
      <CategoryNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}

export default Top;