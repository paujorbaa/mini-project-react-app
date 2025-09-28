import ApartmentList from "../components/ApartmentList";
import ApartmentForm from "../components/ApartmentForm"

function DashboardPage() {
  return (
    <div>
      <ApartmentList />;
      <ApartmentForm />;
    </div>
  );
}

export default DashboardPage;
