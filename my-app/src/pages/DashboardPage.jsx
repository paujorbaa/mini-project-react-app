import ApartmentList from "../components/ApartmentList";


function DashboardPage({ apartment, onRemove }) {
   console.log("Dashboard apartment length:", apartment?.length);
  return (
    <div>
      
      <ApartmentList apartment={apartment} onRemove={onRemove}/>
     
    </div>
  );
}

export default DashboardPage;
