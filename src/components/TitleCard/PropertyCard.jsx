function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={property.image}
        alt={property.title}
      />

      <div className="property-info">
        <h3>{property.title}</h3>

        <p>
          ₹{property.price} for 2 nights · ★ {property.rating}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;