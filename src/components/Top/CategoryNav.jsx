function CategoryNav({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { icon: "🗺️", title: "All" },
    { icon: "🏠", title: "Homes" },
    { icon: "🎈", title: "Experiences" },
    { icon: "🛎️", title: "Services" },
  ];

  return (
    <div className="categories">
      {categories.map((item) => (
        <div
          key={item.title}
          className={`category ${
            selectedCategory === item.title ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(item.title)}
        >
          <span>{item.icon}</span>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryNav;