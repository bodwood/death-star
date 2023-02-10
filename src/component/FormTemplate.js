import React from 'react';
import PropTypes from 'prop-types';

function FromTemplate(props) {
  let titleForm = 'New Room';
  let idForm = '';
  let editRoom = [];
  if (props.editing) {
    editRoom = props.room;
    titleForm = 'Edit ' + props.room.name;
    idForm = props.room.id;
  }

  return (

  )
}

FormTemplate.propTypes = {
  handleFormSubmission: PropTypes.func,
  buttonText: PropTypes.string,
  editing: PropTypes.bool,
}

export default FromTemplate;
