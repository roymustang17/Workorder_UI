import "./App.css";
import React, { useState } from "react";

function Table() {
  const [expandedRows, setExpandedRows] = useState([]);

  const data = [
    { id: 1, col1: "Data 1", col2: "Data 2", col3: "Data 3", col4: "Data 4" },
    { id: 2, col1: "Data 5", col2: "Data 6", col3: "Data 7", col4: "Data 8" },
    {
      id: 3,
      col1: "Data 9",
      col2: "Data 10",
      col3: "Data 11",
      col4: "Data 12",
    },
    {
      id: 4,
      col1: "Data 9",
      col2: "Data 10",
      col3: "Data 11",
      col4: "Data 12",
    },
    {
      id: 5,
      col1: "Data 9",
      col2: "Data 10",
      col3: "Data 11",
      col4: "Data 12",
    },
    // Add more data as needed
  ];

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
      <table className="table table-bordered">
        <tbody>
          {[1, 2, 3, 4].map((index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Row {index}</td>
                <td>
                  <button onClick={() => handleExpand(`${index}-nested`)}>
                    Open
                  </button>
                </td>
              </tr>
              {expandedRows.includes(`${index}-nested`) && (
                <tr>
                  <td colSpan="3">{renderNestedNestedTable()}</td>
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
      <table className="table table-bordered">
        <tbody>
          {[1, 2, 3].map((index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>Subrow {index}</td>
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
          <tr className="table-active">
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Packages</th>
            {/* <th scope="col">{""}</th> */}
            <th scope="col">Rate</th>
            <th scope="col">Total</th>
            <th scope="col">{""}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.col1}</td>
                {/* <td>{}</td> */}
                <td>{row.col3}</td>
                <td>{row.col4}</td>
                <td>
                  <button onClick={() => handleExpand(row.id)}>
                    {expandedRows.includes(row.id) ? "Collapse" : "Expand"}
                  </button>
                </td>
              </tr>
              {expandedRows.includes(row.id) && (
                <tr>
                  <td colSpan="6">{renderNestedTable()}</td>
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
