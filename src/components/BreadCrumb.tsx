import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const isInDetailsPage = pathnames.length > 1 && pathnames[0] === "activities";

  if (!isInDetailsPage) return null;

  return (
    <nav className="breadcrumb__area">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/activities">Activities</Link>
          <span>/</span>
        </li>
        <li className="breadcrumb-item active">Activity name</li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
