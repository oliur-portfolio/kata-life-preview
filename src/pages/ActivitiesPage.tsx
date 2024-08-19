import { Link } from "react-router-dom";

const ActivitiesPage = () => {
  return (
    <section className="admin-question-area">
      <div className="section__heading">
        <h1 className="font--24">Activities</h1>
      </div>

      <div className="custom-table-container">
        <table className="custom-table custom-table--activities">
          <thead className="custom-thead">
            <tr>
              <th className="custom-th">
                <div className="custom-header-content">
                  <h3 className="custom-header-text">Name of activity</h3>
                </div>
              </th>
              <th className="custom-th">
                <div className="custom-header-content">
                  <h3 className="custom-header-text">Number of feedback</h3>
                </div>
              </th>
              <th className="custom-th">
                <div className="custom-header-content">
                  <h3 className="custom-header-text">Username</h3>
                </div>
              </th>
              <th className="custom-th">
                <div className="custom-header-content">
                  <h3 className="custom-header-text">Date of activity</h3>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Meeting</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>108</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>mikesting</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>12/06/2026</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row selected">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>

            <tr className="custom-row">
              <td className="custom-td">
                <div className="custom-cell-content">
                  <Link to="/activities/activity">Label</Link>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
              <td className="custom-td">
                <div className="custom-cell-content">
                  <p>Label</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ActivitiesPage;
