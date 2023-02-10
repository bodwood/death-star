import React from "react";
import NewRoomForm from "./NewRoomForm"
import RoomList from "./RoomList"
import RoomDetail from "./RoomDetail"


export default class RoomControl extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   formVisibleOnPage: false,
   mainRoomList: [],
   selectedRoom: null,
   editing: false
  };
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