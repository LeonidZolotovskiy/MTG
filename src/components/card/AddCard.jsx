import React from 'react';
import axios from 'axios';
import useAppStore from '../../store';

export default function AddCard() {
  const user = useAppStore((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    data.owner_id = user.id;
    if (data.name.trim() && data.img.trim() && data.price.trim() && data.condition.trim()) {
      axios.post('/api/', data).then(() => {
        window.location.href = '/private';
      });
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler} id="contact">
        <h3>Add your card</h3>
        <fieldset>
          <div className="input-group">
            <input
              placeholder="Card's name"
              type="text"
              name="name"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
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
          <div className="input-group">
            <input
              placeholder="Add URL img"
              type="text"
              name="img"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
        </fieldset>
        <fieldset>
          <h6>Choose condition:</h6>
          <select
            className="form-select"
            name="condition"
            aria-label="Default select example"
            required
          >
            <option value="Good" selected>Good</option>
            <option value="Average">Average</option>
            <option value="Bad">Bad</option>
          </select>

        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>

    </div>
  );
}
