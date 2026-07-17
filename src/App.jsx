import { useState } from "react";
import Top from "./components/Top";
import TitleCard from "./components/TitleCard/TitleCard";
import sections from "./data/sections";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase().trim();

  const filteredSections = sections
    .filter(
      (section) =>
        selectedCategory === "All" || section.category === selectedCategory
    )
    .map((section) => ({
      ...section,
      properties: query
        ? section.properties.filter((p) =>
            p.title.toLowerCase().includes(query)
          )
        : section.properties,
    }))
    .filter((section) => section.properties.length > 0);

  return (
    <>
      <Top
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {filteredSections.length > 0 ? (
        filteredSections.map((section) => (
          <TitleCard
            key={section.title}
            title={section.title}
            properties={section.properties}
          />
        ))
      ) : (
        <div className="no-results">
          <p>No results found for &quot;{searchQuery}&quot;</p>
        </div>
      )}
    </>
  );
}

export default App;
