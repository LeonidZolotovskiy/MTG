import React from 'react';

export default function OneCard({ card }) {
  return (
    <div className="col-3 mt-1">
      <div className="card">
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
