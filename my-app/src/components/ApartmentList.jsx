import React, { useState } from "react";
import information from "../data/information.json";
import ListItem from "./ListItem";
import "./ApartmentList.css";

const ApartmentList = () => {
  const [infor, setInfor] = useState(information.results);

  const handleRemoveCard = (id) => {
    setInfor((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="apartmentListContainer">
      <h1>Apartments</h1>
      <div className="apartmentGrid">
        {infor.map((eachApartment) => (
          <ListItem
            key={eachApartment.id}
            eachApartment={eachApartment}
            onRemove={handleRemoveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ApartmentList;
