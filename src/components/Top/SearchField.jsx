import { useState } from "react";

function SearchField({ title, subtitle, type, value, onChange }) {
  const [focused, setFocused] = useState(false);

  const renderInput = () => {
    if (type === "where") {
      return (
        <input
          className="search-input"
          type="text"
          placeholder="Search destinations"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoFocus
        />
      );
    }

    if (type === "when") {
      return (
        <div className="date-inputs">
          <input
            className="search-input date-input"
            type="date"
            value={value?.checkIn || ""}
            onChange={(e) =>
              onChange({ ...value, checkIn: e.target.value })
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <input
            className="search-input date-input"
            type="date"
            value={value?.checkOut || ""}
            onChange={(e) =>
              onChange({ ...value, checkOut: e.target.value })
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
      );
    }

    if (type === "who") {
      return (
        <div className="guest-counter">
          <button
            className="counter-btn"
            onClick={() => onChange(Math.max(0, value - 1))}
          >
            &minus;
          </button>
          <span className="counter-value">{value}</span>
          <button
            className="counter-btn"
            onClick={() => onChange(value + 1)}
          >
            +
          </button>
        </div>
      );
    }

    return null;
  };

  const displaySubtitle = () => {
    if (type === "where") return value || subtitle;
    if (type === "when") {
      if (value?.checkIn && value?.checkOut) {
        return `${value.checkIn} to ${value.checkOut}`;
      }
      return subtitle;
    }
    if (type === "who") {
      return value > 0 ? `${value} guest${value !== 1 ? "s" : ""}` : subtitle;
    }
    return subtitle;
  };

  return (
    <div
      className={`search-field ${focused ? "active" : ""}`}
      onClick={() => setFocused(true)}
    >
      <small>{title}</small>
      {focused ? renderInput() : <p>{displaySubtitle()}</p>}
    </div>
  );
}

export default SearchField;
