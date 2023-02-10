import React from 'react';
import PropTypes from 'prop-types';

const Passenger = (props) => {
  return (
    <div className="passenger-card">
     <div className="passenger-card-details">
      <h2>{props.name} - {props.origin} - {props.armorColor} Passenger - ${props.price}</h2>
     </div>
     <div className='passenger-card-sell'>
      <button className='passenger-card-button'>Sell Passenger {props.stock}</button>

     </div>
    </div>
  )
}

Passenger.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  imgURL: PropTypes.string,
  stock: PropTypes.number,
}

export default Passenger