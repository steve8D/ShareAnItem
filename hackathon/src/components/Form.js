import React from "react";

const Form = ({ values, onType, onSumbit }) => {
  return (
    <form className="itemListingForm">
      <label>Description</label>
      <input
        name="itemDescription"
        value={values.itemDescription}
        type="text"
        onChange={onType}
      />

      <label>Quantity</label>
      <input
        name="quantity"
        value={values.quantity}
        type="number"
        onChange={onType}
      />

      <label>Location</label>
      <input
        name="location"
        value={values.location}
        type="text"
        onChange={onType}
      />

      <label>Time</label>
      <input name="time" value={values.time} type="text" onChange={onType} />

      <br />
      <button onClick={onSumbit}>List item!</button>
    </form>
  );
};

export default Form;
