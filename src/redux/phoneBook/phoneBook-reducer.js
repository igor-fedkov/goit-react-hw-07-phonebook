import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getContactsRequest, getContactsSuccess, getContactsError,
  addContactRequest, addContactSuccess, addContactError,
  editContactRequest, editContactSuccess, editContactError,
  deleteContactRequest, deleteContactSuccess, deleteContactError,
  changeFilter, setEditContactId
} from './phoneBook-actions';

const contactsListReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [editContactSuccess]: (state, { payload }) => [ ...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

const contactFilterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload
})

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [editContactRequest]: () => true,
  [editContactSuccess]: () => false,
  [editContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
})

const editContactIdReducer = createReducer(null, {
  [setEditContactId]: (_, { payload }) => payload,
  [editContactSuccess]: () => null,
})

const errorReducer = createReducer(null, {
  [getContactsError]: (error) => error,
  [addContactError]: (error) => error,
  [deleteContactError]: (error) => error,
})

const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactFilterReducer,
  loading,
	idForEdit: editContactIdReducer,
  error: errorReducer,
})

export default contactsReducer;