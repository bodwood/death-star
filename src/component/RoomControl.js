import React from "react";
import NewRoomForm from "./NewRoomForm"
import RoomList from "./RoomList"
import RoomDetail from "./RoomDetail"


export default class RoomControl extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   formVisibleOnPage: false,
   selectedRoom: null,
   editing: false
  };
  
 }

}