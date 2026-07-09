import { useState } from "react";
import Top from "./components/Top";
import TitleCard from "./components/TitleCard/TitleCard";

const properties = [
  {
    id: 1,
    image: "/images/home1.jpg",
    title: "Flat in Salt Lake City",
    price: "7,669",
    rating: "5.0",
  },
  {
    id: 2,
    image: "/images/home2.jpg",
    title: "Room in Salt Lake City",
    price: "4,200",
    rating: "4.89",
  },
  {
    id: 3,
    image: "/images/home3.jpg",
    title: "Apartment in Kolkata",
    price: "5,935",
    rating: "4.98",
  },
];

const sections = [
  {
    category: "Homes",
    title: "Popular homes in Kolkata",
    properties,
  },
  {
    category: "Homes",
    title: "Available in Mumbai",
    properties,
  },
  {
    category: "Experiences",
    title: "Popular experiences",
    properties,
  },
  {
    category: "Services",
    title: "Popular services",
    properties,
  },
];

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