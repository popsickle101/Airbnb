import NavBar from "./Top/NavBar";
import CategoryNav from "./Top/CategoryNav";
import SearchBar from "./Top/SearchBar";

function Top() {
  return (
    <header>
      <NavBar />
      <CategoryNav />
      <SearchBar />
    </header>
  );
}

export default Top;