import { connect } from 'react-redux';

import * as phonebookSelectors from '../../redux/phoneBook/phonebook-selectors';

import ContactsList from './ContactsList';

const mapStateToProps = state => phonebookSelectors.getFilteredContacts(state);

export default connect(mapStateToProps)(ContactsList);