import { Link } from "react-router-dom";

function NotFoundPage() {
  return(
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link
        to={"/"}
        className="back-home"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
