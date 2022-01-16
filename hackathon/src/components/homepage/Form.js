import React from "react";

const Form = ({ value, onType }) => {
    return (
        <form className="itemListingForm">
            <label>Quantity</label>
            <input
                name="quantity"
                value={value.quantity}
                type="number"
                onChange={onType} />

            <label>Location</label>
            <input
                name="location"
                value={value.location}
                type="text"
                onChange={onType} />

            <label>Time</label>
            <input
                name="time"
                value={value.time}
                type="text"
                onChange={onType} />

            <button>List item!</button>
        </form>
    )
}

export default Form;