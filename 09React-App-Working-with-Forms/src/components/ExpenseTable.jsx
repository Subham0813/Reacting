import { useEffect, useState } from "react";
import { useCustomFilter } from "../hooks/useCustomFilter";
import ContextMenu from "./ContextMenu";
import { useLocalStorage } from "../hooks/useLocalStorage";

/* eslint-disable react/prop-types */
export default function ExpensesTable({
  expenses,
  setExpenses,
  setData,
  setBtnName,
}) {
  const [filteredData, setFilteredData, query] = useCustomFilter(
    expenses,
    (data) => data.category
  ); //bit confusing, need go deeper
  const [row, setRow] = useState("");
  const [contextPosition, setContextPosition] = useState({});
  // const [category, setCategory] = useLocalStorage("category",'');
  // const filteredExpenses = expenses.filter((expenses) =>
  //   expenses.category.toLowerCase().includes(category)
  // );
  const total = filteredData.reduce(
    (accumulator, current) => accumulator + parseFloat(current.amount),
    0
  );

  const [sortFunction, setSortFunction] = useState(() => {
    return () => {};
  });

  const [sortOrder, setSortOrder] = useLocalStorage('sortOrder', '')

  useEffect(() => {
    if (sortOrder === "ascT") {
      setSortFunction(() => (a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "descT") {
      setSortFunction(() => (a, b) => a.title.localeCompare(b.title));
    }

    if (sortOrder === "ascA") {
      setSortFunction(() => (a, b) => b.amount - a.amount);
    } else if (sortOrder === "descA") {
      setSortFunction(() => (a, b) => a.amount - b.amount);
    }
  }, [sortOrder]);


  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setFilteredData(selectedValue);
  };

  const handleDescending = (e) => {
    if (e.target.id === "title") {
      setSortFunction(() => (a, b) => b.title.localeCompare(a.title));
      setSortOrder("descT");
    }
    if (e.target.id === "amount") {
      setSortFunction(() => (a, b) => b.amount - a.amount);
      setSortOrder("descA");
    }
    
  };
  const handleAscending = (e) => {
    if (e.target.id === "title") {
      setSortFunction(() => (a, b) => a.title.localeCompare(b.title));
      setSortOrder("ascT");
    }
    if (e.target.id === "amount") {
      setSortFunction(() => (a, b) => a.amount - b.amount);
      setSortOrder("ascA");
    }
    
  };
  const handleClearSort = () => {
    setSortFunction(() => () => {});
    setSortOrder("");
  };

  return (
    <>
      <ContextMenu
        contextPosition={contextPosition}
        setContextPosition={setContextPosition}
        expenses={expenses}
        setExpenses={setExpenses}
        rowId={row}
        setData={setData}
        setBtnName={setBtnName}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (contextPosition.left) setContextPosition({});
        }}
      >
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  id="title"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow title"
                  onClick={handleAscending}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  id="title"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={handleDescending}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span
                  onClick={handleClearSort}
                  style={{
                    marginLeft: 6,
                    padding: 2,
                    backgroundColor: "pink",
                    borderRadius: 10,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  clear
                </span>
              </div>
            </th>
            <th>
              <select value={query} onChange={handleChange}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  id="amount"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={handleAscending}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  id="amount"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={handleDescending}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span
                  onClick={handleClearSort}
                  style={{
                    marginLeft: 6,
                    padding: 2,
                    backgroundColor: "pink",
                    borderRadius: 10,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  clear
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            .sort(sortFunction)
            .map(({ id, title, category, amount }) => (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setRow(id);
                  setContextPosition({
                    left: e.clientX + 15,
                    top: e.clientY + 15,
                  });
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹{amount}</td>
              </tr>
            ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
