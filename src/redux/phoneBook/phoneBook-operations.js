import axios from 'axios';

import {
  getContactsRequest, getContactsSuccess, getContactsError,
  addContactRequest, addContactSuccess, addContactError,
  deleteContactRequest, deleteContactSuccess, deleteContactError,
  editContactRequest, editContactSuccess, editContactError
} from './phoneBook-actions';


axios.defaults.baseURL = 'http://localhost:4000';

export const getContacts = () => dispatch => {

  dispatch(getContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => {
        dispatch(getContactsError(error))
      })
}

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number
  }

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data))}
    )
    .catch(error => {
      dispatch(addContactError(error))
    })
}

export const editContact = (id, name, number) => dispatch => {
  const contact = {
    name,
    number
  }

  dispatch(editContactRequest());

  axios
    .put(`/contacts/${id}`, contact)
    .then(({ data }) => dispatch(editContactSuccess(data)))
    .catch(error => dispatch(editContactError(error)))
}

export const deleteContact = id => dispatch => {

  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => {dispatch(deleteContactError(error))})
}