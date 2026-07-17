const homeProperties = [
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

const experienceProperties = [
  {
    id: 4,
    image: "/images/experience1.jpg",
    title: "Cooking Class",
    price: "2,500",
    rating: "4.95",
  },
  {
    id: 5,
    image: "/images/experience2.jpg",
    title: "City Walking Tour",
    price: "1,800",
    rating: "4.90",
  },
];

const serviceProperties = [
  {
    id: 6,
    image: "/images/service1.jpg",
    title: "Professional Photography",
    price: "5,500",
    rating: "4.98",
  },
  {
    id: 7,
    image: "/images/service2.jpg",
    title: "Private Chef",
    price: "8,000",
    rating: "5.0",
  },
];

const sections = [
  {
    category: "Homes",
    title: "Popular homes in Kolkata",
    properties: homeProperties,
  },
  {
    category: "Homes",
    title: "Available in Mumbai",
    properties: homeProperties,
  },
  {
    category: "Experiences",
    title: "Popular Experiences",
    properties: experienceProperties,
  },
  {
    category: "Services",
    title: "Popular Services",
    properties: serviceProperties,
  },
];

export default sections;