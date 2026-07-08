function CategoryNav() {
  const categories = [
    { icon: "🗺️", title: "All" },
    { icon: "🏠", title: "Homes" },
    { icon: "🎈", title: "Experiences" },
    { icon: "🛎️", title: "Services" },
  ];

  return (
    <div className="categories">
      {categories.map((item, index) => (
        <div
          className={`category ${index === 0 ? "active" : ""}`}
          key={item.title}
        >
          <span>{item.icon}</span>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryNav;