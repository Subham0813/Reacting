/* eslint-disable react/prop-types */
export default function CustomInput({label, id, value, onChange, error}) {

    return (
        <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} value={value} onChange={onChange} />
        <p className="error">{error}</p>
      </div>
    );
}