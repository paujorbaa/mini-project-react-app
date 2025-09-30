import React, { useMemo, useState, useEffect } from "react"
import ListItem from "./ListItem";
import "./ApartmentList.css";

const ApartmentList = ({ apartment = [], onRemove }) => {
  // const [infor, setInfor] = useState(information.results);

  const [page , setPage] = useState(1);
  const pageSize = 12;
  const totalPages = Math.ceil(apartment.length / pageSize) || 1;

  const currentItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return apartment.slice(start, start + pageSize);
  }, [apartment, page, pageSize]);

  
  const handleRemoveCard = (id) => {
     onRemove?.(id);
  };
  
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [apartment, page, totalPages]);

  return (
    <div className="apartmentListContainer">
      <h1>Apartments</h1>
      <div className="apartmentGrid">
        {currentItems.map((eachApartment) => (
          <ListItem
            key={eachApartment.id}
            eachApartment={eachApartment}
            onRemove={handleRemoveCard}
          />
        ))}
      </div>
    
    <div className="pagination">
        <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
          ← Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(Math.max(0, page - 3), Math.max(0, page - 3) + 5)
          .map((n) => (
            <button
              key={n}
              className={`page-btn ${n === page ? "active" : ""}`}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}

        <button className="page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Next →
        </button>
      </div>
    </div>
  )
};

export default ApartmentList;
