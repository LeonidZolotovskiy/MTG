import React from 'react';

const card = {
  name: 'Mountain', img: 'https://m.media-amazon.com/images/I/41uQsn5uK0L._AC_.jpg', price: '555', condition: 'Good',
};

export default function OneCard() {
  return (
    <div className="card col-3 mt-1">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={card.img} className="img-fluid rounded-start" alt={card.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">
              Price:
              {' '}
              {card.price}
              {' '}
              $
            </p>
            <p className="card-text">
              <small className="text-muted">
                Condition:
                {' '}
                {card.condition}
                {' '}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
