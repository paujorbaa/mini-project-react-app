import information from "../data/information.json";
import { Link, useParams } from "react-router-dom";

function ItemDetailsPage() {
  const { itemId } = useParams();
    const item = information.results.find(
    (entry) => String(entry.id) === String(itemId)
  );
  if (!item) {
    return (
      <div>
        <h1>Item not found.</h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.name}</h1>

      <div>
        <img src={item.picture_url || placeholderImage} alt={item.name} />

        {item.description && <p>{item.description}</p>}

        <div>
          {item.neighbourhood_overview && (
            <p>
              <strong>Neighborhood:</strong> {item.neighbourhood_overview}
            </p>
          )}

          <p>
            <strong>Host:</strong> {item.host_name}{" "}
            {item.host_is_superhost && <span>(Superhost)</span>}
          </p>

          {item.host_location && (
            <p>
              <strong>Host Location:</strong> {item.host_location}
            </p>
          )}

          <p>
            <strong>Price per Night:</strong> {item.price}
          </p>

          <p>
            <strong>Room Type:</strong> {item.room_type}
          </p>

          <p>
            <strong>Accommodates:</strong> {item.accommodates} guest(s)
          </p>

          {item.amenities?.length > 0 && (
            <p>
              <strong>Amenities:</strong>{" "}
              {item.amenities.slice(0, 5).join(", ")}...
            </p>
          )}

          <p>
            <strong>Number of Reviews:</strong> {item.number_of_reviews}
          </p>
        </div>

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
