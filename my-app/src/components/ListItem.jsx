import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ eachApartment, onRemove }) => {
  const {
    id,
    name,
    picture_url,
    price,
    review_scores_rating,
    number_of_reviews,
    room_type,
  } = eachApartment;

  return (
    <div className="apartmentCard">
      <Link to={`/item/${id}`}>
        <img
          src={picture_url || "https://via.placeholder.com/400x300"}
          alt={name}
        />
        <section>
          <div className="apartmentCardHeader">
            <h3>{name}</h3>
            <span className="price">{price}</span>
          </div>

          <p className="meta">{room_type}</p>

          <p className="reviews">
            ⭐{" "}
            {review_scores_rating
              ? review_scores_rating.toFixed(1)
              : "No rating"}{" "}
            · {number_of_reviews} reviews
          </p>
        </section>
      </Link>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default ListItem;
