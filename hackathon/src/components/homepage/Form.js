import React from "react";

const Form = () => {
    const handleSubmit = function (e) {
        e.preventDefault();
    }

    return (
        <form>
            <label>Description</label>
            <input type="text"></input>

            <label>Quantity</label>
            <input type="text"></input>

            <label>Location</label>
            <input type="text"></input>

            <label>Time</label>
            <input type="text"></input>

            <button onClick={handleSubmit}>List item!</button>
        </form>
    )
}

export default Form;