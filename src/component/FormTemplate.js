import React from 'react'
import PropTypes from 'prop-types'

function FormTemplate(props) {
  let titleForm = 'New Room'
  let idForm = ''
  let roomToEdit = []
  if (props.editing) {
    roomToEdit = props.room
    titleForm = 'Edit ' + props.room.name
    idForm = props.room.id
  }

  return (
    <form onSubmit={props.formSubmissionHandler} className='form'>
      <div className='form-header'>
        <h1>Room</h1>
        <div className='form-title'>
          <h1>{titleForm}</h1>
          <p>id: {idForm}</p>
        </div>
      </div>

      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        name='name'
        placeholder='Room Name'
        defaultValue={roomToEdit.name || ''}
      />
      <br />

      <label htmlFor='origin'>Origin: </label>
      <input
        type='text'
        name='origin'
        placeholder='Room Origin'
        defaultValue={roomToEdit.origin || ''}
      />
      <br />

      <label htmlFor='price'>Price: </label>
      <input
        type='number'
        name='price'
        step=''
        defaultValue={roomToEdit.price || ''}
      />
      <br />

      <label htmlFor='color'>Room Style i.e. paint color: </label>
      <select name='color' defaultValue={roomToEdit.color || 'Fog'}>
        <option value='Flipper'>Flipper</option>
        <option value='Ashe'>Ashe</option>
        <option value='SandPink'>Sand Pink</option>
        <option value='FireStone'>Fire Stone</option>
      </select>
      <br />

      <label htmlFor='description'>Description: </label>
      <input
        type='text'
        name='description'
        placeholder='Room Description'
        defaultValue={roomToEdit.description || ''}
      />
      <br />
    
      <br />
      <input
        type='number'
        name='stock'
        defaultValue={roomToEdit.stock || null}
      />
      <br />

      <button type='submit'>{props.buttonText}</button>
    </form>
  )
}

FormTemplate.propTypes = {
  handleFormSubmission: PropTypes.func,
  buttonText: PropTypes.string,
  editing: PropTypes.bool,
}

export default FormTemplate
