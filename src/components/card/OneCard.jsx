import React, { useState } from 'react';

// const card = {
//   name: 'Mountain', img: 'https://m.media-amazon.com/images/I/41uQsn5uK0L._AC_.jpg', price: '555', condition: 'Good',
// };

export default function OneCard({ card, currentUser }) {
  const [change, setChange] = useState(false);

  const [cardState, setCardState] = useState({
    name: card.name,
    img: card.img,
    price: card.price,
    condition: card.condition,
    status: card.status,
  });

  const changeHandler = (e) => {
    setCardState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (

    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn mr-2">
            <i className="fas fa-link" />
            {' '}
            Visit Site
          </a>
          <a href="#" className="btn ">
            <i className="fab fa-github" />
            {' '}
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
