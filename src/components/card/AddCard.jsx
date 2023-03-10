import React from 'react';
import axios from 'axios';

export default function AddCard() {
  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    if (data.name.trim() && data.img.trim() && data.price.trim() && data.condition.trim()) {
      axios.post('/api/', data)
        .then((res) => console.log(res));
      e.target.reset();
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler} id="contact">
        <h3>Add your card</h3>
        <fieldset>
          <input
            placeholder="Card's name"
            type="text"
            name="name"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <div className="input-group">
          <input
            placeholder="Add price"
            type="text"
            name="price"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <fieldset>
          <input
            placeholder="Add URL img"
            type="url"
            name="img"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <div className="input-group">
            <input
              placeholder="Add price"
              type="text"
              name="condition"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>

        </fieldset>
        {/* <fieldset>
          <select
            className="form-select"
            name="condition"
            aria-label="Default select example"
          >
            <option selected>Condition</option>
            <option value="1">Good</option>
            <option value="2">Average</option>
            <option value="3">Bad</option>
          </select>
        </fieldset> */}
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>

    </div>
  );
}
