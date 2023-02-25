import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import FormTemplate from './FormTemplate';

function NewRoomForm(props) {
  function handleNewRoomFormSubmission(e) {
    e.preventDefault();
    const hasName = e.target.name.value;
    const hasOrigin = e.target.origin.value;
    const hasPrice = e.target.price.value;
    const hasColor = e.target.color.value;
    const hasDescription = e.target.description.value;
    const hasAll = hasName && hasOrigin && hasPrice && hasColor && hasDescription;
    {
      hasAll
        ? props.onNewRoomCreation({
            name: e.target.name.value,
            origin: e.target.origin.value,
            price: e.target.price.value,
            color: e.target.color.value,
            description: e.target.description.value,
            id: v4(),
            stock: 0,
          })
        : alert('All fields are required.');
      return;
    }
  }

  return (
    <>
      <FormTemplate formSubmissionHandler={handleNewRoomFormSubmission} buttonText='Add Room' editing={false} />
    </>
  );
}

NewRoomForm.protoTypes = {
  onNewRoomCreation: PropTypes.func,
};

export default NewRoomForm;
