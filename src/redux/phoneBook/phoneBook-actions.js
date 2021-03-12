import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const editContactRequest = createAction('contacts/editContactRequest');
export const editContactSuccess = createAction('contacts/editContactSuccess');
export const editContactError = createAction('contacts/editContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('PHONEBOOK/CHANGE_FILTER');

export const setEditContactId = createAction('PHONEBOOK/SET_EDIT_CONTACT_ID');
