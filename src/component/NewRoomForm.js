import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import FormTemplate from './FormTemplate'

function NewRoomForm(props) {
  function handleNewRoomFormSubmission(e) {
    e.preventDefault()
    props.onNewRoomCreation({
      name: e.target.name.value,
      origin: e.target.origin.value,
      price: e.target.price.value,
      color: e.target.color.value,
      description: e.target.description.value,
      id: v4(),
      stock: 12,
    })
  }

  return (
    <>
      <FormTemplate
        formSubmissionHandler={handleNewRoomFormSubmission}
        buttonText='Add Room'
        editing = {false}
      />
    </>
  )
}

NewRoomForm.protoTypes = {
  onNewRoomCreation: PropTypes.func
}

export default NewRoomForm
