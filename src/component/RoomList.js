import React from "react";
import Room from "./Room";
import PropTypes from 'prop-types'

function RoomList(props){
 return (
  <div className="room-list">
   {props.roomList.sort().map((room)=>
    <Room
     roomClicked={props.onRoomSelection}
     roomSold={props.onRoomSold}
     name={room.name}
     origin={room.origin}
     color={room.origin}
     stock={room.stock}
     price={room.price}
     id={room.id}
     key={room.id}
     />
   )}
  </div>
 );
}

RoomList.propTypes = {
 roomList: PropTypes.array,
 onRoomSelection: PropTypes.func
}