import React from 'react'
import NewRoomForm from './NewRoomForm'
import RoomList from './RoomList'
import RoomDetail from './RoomDetail'
import dataDefault from '../dataDefault'

export default class RoomControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      mainRoomList: dataDefault.data.room.sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
      selectedRoom: null,
      editing: false,
    }
  }

  handleClick = () => {
   if(this.state.selectedRoom != null) {
    this.setState({
     formVisibleOnPage: false,
     selecteRoom: null,
     editing: false
    });
   } else {
    this.setState(prevState => ({
     formVisibleOnPage: !prevState.formVisibleOnPage
    }));
   }
  }

  handleDeletingRoom = (id) => {
   const updatedRoomList = this.state.mainRoomList.filter(room => room.id != id);
   this.setState({
    mainRoomList: updatedRoomList.sort((a,b) => a.name.localeCompare(b.name)),
    selectedRoom: null
   })
  }

  hanldeEditClick = () => {
   this.setState({editing: true})
  }

  handleEditingRoomInList = (roomToEdit) => {
    const editedRoomList = this.state.mainRoomList
      .filter((room) => room.id !== this.state.selectedRoom.id)
      .concat(roomToEdit)
    this.setState({
      mainRoomList: editedRoomList.sort((a, b) => a.name.localeCompare(b.name)),
      editing: false,
      selecteRoom: null,
    })
  }

  render() {
    let currentlyVisibleState = null
    let buttonText = null
    if (this.state.editing) {
      currentlyVisibleState = 
        <EditRoomForm
          room={this.state.selectedRoom}
          onEditRoom={this.handleEditingRoomInList}
        />
      buttonText = 'Return to Room List'
    } else if(this.state.selectedRoom != null) {
      currentlyVisibleState = <RoomDetail room={this.state.selectedRoom} onClickingDelete={this.handleDeletingRoom} onClickingEdit={this.handleEditClick} onClickingSell={this.handleSellingRoom} />
      buttonText= 'Return to Room List';
    }
  }
}
