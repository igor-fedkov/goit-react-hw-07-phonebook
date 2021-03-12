import { connect } from 'react-redux';

import { setEditContactId } from '../../redux/phoneBook/phoneBook-actions';
import { deleteContact } from '../../redux/phoneBook/phoneBook-operations';

import ContactItem from './ContactItem';

const mapDispatchToProps = (dispatch) => ({
	deleteContact: id => dispatch(deleteContact(id)),
	setEditContactId: id => dispatch(setEditContactId(id)),
})

export default connect(null, mapDispatchToProps)(ContactItem);