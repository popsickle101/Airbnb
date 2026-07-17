import { useState } from "react";
import Top from "./components/Top";
import TitleCard from "./components/TitleCard/TitleCard";
import sections from "./data/sections";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Top
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {sections
        .filter(
          (section) =>
            selectedCategory === "All" ||
            section.category === selectedCategory
        )
        .map((section) => (
          <TitleCard
            key={section.title}
            title={section.title}
            properties={section.properties}
          />
        ))}
    </>
  );
}

export default App;