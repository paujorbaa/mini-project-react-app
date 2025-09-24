import React from "react";
const ListItem = ({ eachApartment, onRemove }) => {
  return (
    <div className="apartmentCard">
      <section>
        <h5>
          host_identity_verified:{""}
          {eachApartment.host_identity_verified === true ? "✔️" : "❌"}
        </h5>
      </section>
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
