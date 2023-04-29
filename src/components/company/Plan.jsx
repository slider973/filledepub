import Link from "next/link";
import React from "react";

function Plan() {
  return (
    <div className="col-lg-12">
      <div className="table-wrapper2">
        <div className="title-and-btn">
          <div className="title">
            <h4>Plan &amp; Invoice List:</h4>
          </div>
          <div className="job-post-btn">
            <Link legacyBehavior href="/job-post">
              <a className="primry-btn-2">Upgrade Plan</a>
            </Link>
          </div>
        </div>
        <table className="eg-table table plan-invoice-table mb-0">
          <thead>
            <tr>
              <th>(#) Number</th>
              <th>Date</th>
              <th>Package</th>
              <th>Amount</th>
              <th>Payment Through</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="style-2">
              <td data-label="(#) Number">#83c8h9s88ee4</td>
              <td data-label="Date">03/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$720</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status yellow-color">
                  Pending <i className="bi bi-download" />
                </button>
              </td>
            </tr>
            <tr className="style-2">
              <td data-label="(#) Number">#837bg73j833k3</td>
              <td data-label="Date">07/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$1000</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status red-color">
                  Unpaid <i className="bi bi-download" />
                </button>
              </td>
            </tr>
            <tr className="style-2">
              <td data-label="(#) Number">#83c8h9s88ee4</td>
              <td data-label="Date">03/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$720</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status green-color">
                  Paid Fee <i className="bi bi-download" />
                </button>
              </td>
            </tr>
            <tr className="style-2">
              <td data-label="(#) Number">#83c8h9s88ee4</td>
              <td data-label="Date">03/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$720</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status green-color">
                  Paid Fee <i className="bi bi-download" />
                </button>
              </td>
            </tr>
            <tr className="style-2">
              <td data-label="(#) Number">#83c8h9s88ee4</td>
              <td data-label="Date">03/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$720</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status yellow-color">
                  Pending <i className="bi bi-download" />
                </button>
              </td>
            </tr>
            <tr className="style-2">
              <td data-label="(#) Number">#83c8h9s88ee4</td>
              <td data-label="Date">03/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$720</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status yellow-color">
                  Pending <i className="bi bi-download" />
                </button>
              </td>
            </tr>
            <tr className="style-2">
              <td data-label="(#) Number">#83c8h9s88ee4</td>
              <td data-label="Date">03/01/2023</td>
              <td data-label="Package">
                <button className="eg-btn light-sky-btn">Default</button>
              </td>
              <td data-label="Amount">$720</td>
              <td data-label="Payment Through">Online Method</td>
              <td data-label="Payment Status">
                <button className="status yellow-color">
                  Pending <i className="bi bi-download" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination-table-info">
          <div className="table-info">
            <span>06 Results Showing In 20 Jobs</span>
          </div>
          <div className="pagination-area">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1} />
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
