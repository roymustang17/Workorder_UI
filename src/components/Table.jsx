import React, { useState } from "react";
import { data, rate, total } from "./data";

function Table() {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpand = (id) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows.includes(id)) {
        return prevExpandedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevExpandedRows, id];
      }
    });
  };

  const renderNestedTable = () => {
    return (
      <table className="table table-bordered m-0 ">
        <tbody>
          {[1, 2, 3, 4].map((index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Activity {index}</td>
                <td>{rate}</td>
                <td>{total}</td>
                <td>
                  <button onClick={() => handleExpand(`${index}-nested`)}>
                    Open
                  </button>
                </td>
              </tr>
              {expandedRows.includes(`${index}-nested`) && (
                <tr>
                  <td colSpan="6" className="p-0">{renderNestedNestedTable()}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

  const renderNestedNestedTable = () => {
    return (
      <table className="table table-bordered m-0">
        <tbody>
          {[1, 2, 3].map((index) => (
            <tr key={index} className="bg-black">
              <td>
                <input type="checkbox" />
              </td>
              <td>Work Item {index}</td>
              <td className="">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr className="flex table-active">
            <th scope="col" className="flex-1">
              <input type="checkbox" />
            </th>
            <th scope="col-sm-9" className="flex-6">Packages</th>
            <th scope="col" className="flex-4">Rate <span style={{ fontWeight: 400, fontSize: '0.75rem', fontStyle: 'italic'}}>(in sqft)</span></th>
            <th scope="col" className="flex-2">Total</th>
            <th scope="col" className="flex-1">{""}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Civil {row.id}</td>
                <td>{rate}</td>
                <td>{total}</td>
                <td className="bg-black p-0">
                {/* btn btn-bor border-0 bg-transparent */}
                <button onClick={() => handleExpand(row.id)} className="bg-white m-0">
                  <span style={{ fontSize: "2rem", color: "Aqua" }}>
                    {expandedRows.includes(row.id) ? "-" : "+"}
                  </span>
                </button>
                </td>
              </tr>
              {expandedRows.includes(row.id) && (
                <tr>
                  <td colSpan="6" className="p-0">{renderNestedTable()}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;