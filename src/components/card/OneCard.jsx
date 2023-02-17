import React, { useState } from 'react';
import axios from 'axios';
import useAppStore from '../../store';

export default function OneCard({ card }) {
  const [change, setChange] = useState(card.inBasket);
  const user = useAppStore((state) => state.user);

  const addToCartHandler = () => {
    setChange((prev) => !prev);
    axios.post(`/api/cart/${card?.id}`);
  };
  return (

    <div className="card col-3">
      <div className="row g-1">
        <div className="col-md-4">
          <img src={card?.img} className="img-fluid rounded-start" alt={card?.name} />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{card?.name}</h5>
            <p className="card-text">
              Price:
              {' '}
              {card?.price}
              {' '}
              $
            </p>
            <p className="card-text">
              Condition:
              {' '}
              {card?.condition}
              {' '}
            </p>
            <p className="card-text">
              City:
              {' '}
              {card?.User.city}
              {' '}
            </p>
            {user && user?.id !== card?.owner_id ? (
              <div>
                {!change ? (<button onClick={addToCartHandler} type="button" className="btn btn-primary">В корзину</button>)
                  : (<p className="card-text">Добавлено в корзину</p>)}

              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>

  );
}
