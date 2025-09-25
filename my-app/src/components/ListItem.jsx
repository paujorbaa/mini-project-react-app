import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ eachApartment, onRemove }) => {
  const{ id,name }=eachApartment;
  return (
    <div className="apartmentCard">
      <Link to={`/item/${id}`}>
      <section>
        <h3>{eachApartment.name}</h3>
        <h5>
          host_identity_verified:{""}
          {eachApartment.host_identity_verified === true ? "✔️" : "❌"}
        </h5>
      </section>
      </Link>
      <button
        onClick={() => {
          onRemove(eachApartment.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default ListItem;
