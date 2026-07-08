import "./TitleCard.css";
import PropertyCard from "./PropertyCard";

function TitleCard({ title, properties }) {
  return (
    <section className="title-card">
      <div className="title-card-header">
        <h2>{title}</h2>

        <div className="title-card-buttons">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>

      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}

export default TitleCard;