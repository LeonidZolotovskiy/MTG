import React from 'react';
import AppStore from '../../store';

export default function OneCard() {
  const card = AppStore((state) => state.card);
  console.log(card);
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
