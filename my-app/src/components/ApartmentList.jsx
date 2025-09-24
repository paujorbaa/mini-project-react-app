import React from "react";
import information from "../data/information.json";
import { useState } from "react";
import ListItem from "./ListItem";
const ApartmentList = () => {
  const [infor, setInfor] = useState(information.results);
  const handleRemoveCard = (id) => {
    const newList = infor.filter((element) => {
      if (element.id !== id) {
        return true;
      } else {
        return false;
      }
    });

    setInfor(newList);
  };
  return (
    <>
      <h1>ApartmentList</h1>
      {infor.map((eachApartment) => {
        return (
          <div className="MainContainer" key={eachApartment.id}>
            <ListItem
              eachApartment={eachApartment}
              onRemove={handleRemoveCard}
            />
          </div>
        );
      })}
    </>
  );
};
export default ApartmentList;
