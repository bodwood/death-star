import React from 'react'
import FormTemplate from './FormTemplate'
import PropTypes from 'prop-types'

function EditRoomForm(props) {
  const { room } = props

  function handleEditRoomFormSubmission(event) {
    event.preventDefault()
    props.onEditRoom({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      color: event.target.color.value,
      description: event.target.description.value,
      id: room.id,
      stock: parseInt(event.target.stock.value),
    })
  }

  return (
    <FormTemplate
      formSubmissionHandler={handleEditRoomFormSubmission}
      buttonText='Update Room'
      room={room}
      editing={true}
    />
  )
}

EditRoomForm.propTypes = {
  onEditRoom: PropTypes.func,
  room: PropTypes.object,
}

export default EditRoomForm;