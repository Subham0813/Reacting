/* eslint-disable react/prop-types */
export default function SelectMenu({label, id, value, options, onChange, error}) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={onChange}>
          <option value="" hidden>
            Select Category
          </option>
          {
          options.map((option, index) => 
            <option key={index} value={option}>{option}</option>
          )
          }
        </select>
        <p className="error">{error}</p>
      </div>
    </>
  );
}
