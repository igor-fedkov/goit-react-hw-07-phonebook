import { connect } from 'react-redux';

import * as phonebookSelectors from '../../redux/phoneBook/phonebook-selectors';
import { setEditContactId } from '../../redux/phoneBook/phoneBook-actions';
import { getContacts, addContact, editContact } from '../../redux/phoneBook/phoneBook-operations';

import PhoneBook from './PhoneBook';

const mapStateToProps = state => {
	return {
		contacts: phonebookSelectors.getContacts(state),
		loading: phonebookSelectors.getLoading(state),
		idForEdit: phonebookSelectors.getEditContactId(state),
		editName: phonebookSelectors.getEditContact(state)?.name,
		editNumber: phonebookSelectors.getEditContact(state)?.number,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getContacts: () => dispatch(getContacts()),
		addContact: (name, number) => dispatch(addContact(name, number)),
		editContact: (id, name, number) => dispatch(editContact(id, name, number)),
		setEditContactId: id => dispatch(setEditContactId(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);