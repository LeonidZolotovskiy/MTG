import React from 'react';

export default function PrivateCabinet() {
  return (
    <div className="container">
      <form id="contact" action="" method="post">
        <h3>Add your card</h3>
        {/* <h4>Contact us today, and get reply with in 24 hours!</h4> */}
        <fieldset>
          <input placeholder="Card's name" type="text" tabIndex="1" required autoFocus />
        </fieldset>
        <div className="input-group">
          <input placeholder="Add price" type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
        </div>
        <fieldset>
          <input placeholder="Add URL img" type="url" tabIndex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Good</a></li>
              <li><a className="dropdown-item" href="#">Average action</a></li>
              <li><a className="dropdown-item" href="#">Bed</a></li>
            </ul>
          </div>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>

    </div>
  );
}
