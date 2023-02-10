import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import FormTemplate from './FormTemplate'

function NewRoomForm(props) {
 function handleNewRoomFormSubmission(e){
  e.preventDefault();
  props.onNewRoomCreation({
   
  })
 }
}