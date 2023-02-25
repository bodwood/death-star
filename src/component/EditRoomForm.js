import React from 'react';
import FormTemplate from './FormTemplate';
import PropTypes from 'prop-types';

function EditRoomForm(props) {
  const { room } = props;

  function handleEditRoomFormSubmission(event) {
    event.preventDefault();
    const stockProperty = event.target.stock.value;
    const stockIsNum = null;
    if (isNaN(stockProperty) || stockProperty === '') {
      alert('Please enter a valid number for stock.');
      return
    }
    if(stockProperty < 0 )
    {
      alert('Stock must have a value of at least 0')
    }else {
      props.onEditRoom({
        name: event.target.name.value,
        origin: event.target.origin.value,
        price: event.target.price.value,
        color: event.target.color.value,
        description: event.target.description.value,
        stock: stockProperty,
        id: room.id,
      });
    }
  }

  return (
    <FormTemplate
      formSubmissionHandler={handleEditRoomFormSubmission}
      buttonText='Update Room'
      room={room}
      editing={true}
    />
  );
}

EditRoomForm.propTypes = {
  onEditRoom: PropTypes.func,
  room: PropTypes.object,
};

export default EditRoomForm;
