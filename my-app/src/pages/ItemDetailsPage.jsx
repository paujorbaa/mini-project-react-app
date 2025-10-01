import information from "../data/information.json";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  const { itemId } = useParams();
  const resultList = information.results;
  const item = resultList.find((entry) => entry.id == itemId);

  if (!item) {
    return (
      <div className="item-not-found">
        <h1>Item not found.</h1>
        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="listing-page">
      <div className="hero">
        <img src={item.picture_url} alt={item.name} className="hero-image" />
        <div className="hero-actions">
          <button className="wishlist-btn">♡</button>
          <button className="share-btn">⇪</button>
        </div>
      </div>

      <div className="listing-main">
        <div className="listing-left">
          <h1 className="listing-title">{item.name}</h1>

          <div className="listing-rating">
            ⭐ {item.review_scores_rating ?? "New"} · {item.number_of_reviews}{" "}
            reviews · {item.neighbourhood}
          </div>

          <p className="listing-description">{item.description}</p>


          <div className="host-section">
            <img
              src={item.host_picture_url}
              alt={item.host_name}
              className="host-avatar"
            />
            <div>
              <h3>Hosted by {item.host_name}</h3>
              <p>Joined in {new Date(item.host_since).getFullYear()}</p>
              {item.host_is_superhost && (
                <span className="superhost-badge">★ Superhost</span>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div className="amenities">
            <h2>What this place offers</h2>
            <ul>
              {item.amenities.slice(0, 10).map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
          </div>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
        </div>

        <div className="listing-right">
          <div className="booking-box">
            <p className="price">{item.price || "Contact Host"}</p>
            <p>{item.minimum_nights} night minimum</p>
            <button className="book-btn">Check Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
