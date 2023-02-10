import React from "react";
import NewRoomForm from "./NewRoomForm"
import RoomList from "./RoomList"
import RoomDetail from "./RoomDetail"
import dataDefault from "../dataDefault"


export default class RoomControl extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   formVisibleOnPage: false,
   mainRoomList: dataDefault.data.room.sort((a, b) => a.name.localeCompare(b.name)),
   selectedRoom: null,
   editing: false
  };
 }

 handleEditingRoomInList = (roomToEdit) => {
  const fullRoomList = this.state.
 }

 render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if(this.state.editing) {
   currentlyVisibleState = <EditRoomForm room={this.state.selectedRoom} onEditRoom={this.handleEditingRoomInList} />
   buttonText = "Return to Room List";
  }
 }

}