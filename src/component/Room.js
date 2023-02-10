import React from 'react';
import PropTypes from 'prop-types';

function Room(props){
  return (
    <div className="room-card">
     <div className="room-card-details" onClick={() => props.roomClicked(props.id)}>
      <h2>{props.name} - {props.origin} - {props.roomColor} Room - ${props.price} /night</h2>
     </div>
     <div className='room-card-sell'>
      <button className='room-card-button' onClick={() => props.roomSold(props.id)}>Rent Room {props.stock}</button>
     </div>
    </div>
  )
}

Room.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  onRoomClicked: PropTypes.func,
  stock: PropTypes.number,
}

export default Room