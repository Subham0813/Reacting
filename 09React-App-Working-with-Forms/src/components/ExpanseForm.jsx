/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomInput from "./CustomInput";
import SelectMenu from "./SelectMenu";

export default function ExpenseForm({
  setExpenses,
  data,
  setData,
  btnName,
  setBtnName,
}) {
  const [errors, setErrors] = useState({});
  const errorConfig = {
    title: [
      { required: true, message: "Please enter a Title" },
      { minLength: 5, message: "Title should be atleast 5 characters long" },
    ],
    category: [
      {
        required: true,
        message: "Select a Category",
      },
    ],
    amount: [
      {
        required: true,
        message: "Please enter a valid Amount",
      },
      {
        pattern: /\d+\.?\d*/,
        message: "Please enter a valid number",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) => {
      errorConfig[key].some((rule) => {
        if (!value && rule.required) {
          errorData[key] = rule.message;
          return true;
        }
        if (value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorData);
    return errorData;
  };

  /*const handleChange = (target) => {
    if (target.id === "title") {
      setTitle(target.value);
    } else if (target.id === "category") {
      setCategory(target.value);
    } else if (target.id === "amount") {
      setAmount(target.value);
    }
  };*/

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevState) => ({ ...prevState, [id]: value }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate(data);
    if (Object.keys(result).length > 0) return;

    if (btnName) {
      setExpenses((prevState) =>
        prevState.map((exp) => {
          if (exp.id === btnName) {
            return { ...data, id: btnName };
          }
          return exp;
        })
      );
      setBtnName("");
    }
    else{
      setExpenses((prevState) => [
        ...prevState,
        { ...data, id: crypto.randomUUID() },
      ]);
    }

    //After setting data we should remove prev data to avoid multiple same inputs

    //removing code

    // setTitle("");
    // setCategory("");
    // setAmount("");

    setData({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      {/* <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" value={data.title} onChange={handleChange} />
        <p className="error">{errors.title}</p>
      </div> */}

      {/* Optimized Approach */}
      <CustomInput
        label="Title"
        id="title"
        value={data.title}
        onChange={handleChange}
        error={errors.title}
      />

      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" value={data.category} onChange={handleChange}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div> */}

      {/* Optimized Approach */}

      <SelectMenu
        label="Category"
        id="category"
        value={data.category}
        defaultOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        onChange={handleChange}
        error={errors.category}
      />

      {/* <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" value={data.amount} onChange={handleChange} />
        <p className="error">{errors.amount}</p>
      </div> */}

      <CustomInput
        label="Amount"
        id="amount"
        value={data.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <button className="add-btn">{btnName ? "Save" : "Add"}</button>
    </form>
  );
}
