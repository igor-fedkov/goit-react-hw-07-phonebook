import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";

import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import Notification from '../Notification';
import LoaderSpinner from '../LoaderSpinner';
import Modal from '../Modal';

import { PhoneBookEl, Title } from './PhoneBook.css';

class PhoneBook extends Component {
	
	static propTypes = {
		showNotification: PropTypes.bool
	}

	state = {
		showNotification: false,
	}

	componentDidMount() {
		this.props.getContacts();
	}

	onSubmitAddContact = (name, number) => {
		const { contacts, addContact } = this.props;

		const isNameAlreadyExists = contacts.find(contact => contact.name === name);
		if (isNameAlreadyExists !== undefined) {
			this.setState({ showNotification: true });
      setTimeout(() => this.setState({ showNotification: false }), 3000);
      return;
		}
		addContact(name, number);	

		return true;
	}

	onSubmitEditContact = (name, number) => {
		const { contacts, idForEdit, editName, editNumber, editContact, setEditContactId } = this.props;

		if (name === editName && number === editNumber) {
			setEditContactId(null);
			return;
		}

		const isNameAlreadyExists = contacts.find(contact =>
			contact.name === name && contact.id !== idForEdit
		);
		if (isNameAlreadyExists !== undefined) {
			this.setState({ showNotification: true });
      setTimeout(() => this.setState({ showNotification: false }), 3000);
      return;
		}
		editContact(idForEdit, name, number);

		return true;
	}

	onCloseEditModal = () => {
		const { setEditContactId } = this.props;

		setEditContactId(null);
	}

	render() {
		const { showNotification } = this.state;
		const { contacts, loading, idForEdit } = this.props;
		const timeout = 250;

		return (
			<PhoneBookEl>
				
				<CSSTransition
					in={true}
					appear={true}
					classNames="fade"
					timeout={timeout}>
					
						<Title>PhoneBook</Title>
				</CSSTransition>

				<CSSTransition
					in={showNotification}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit
				>					
					<Notification text="Contact already exists!"/>
				</CSSTransition>

				<ContactForm
					btnCaption='Add contact'
					startName=''
					startNumber=''
					onSubmitContact={this.onSubmitAddContact}
				/>

				<CSSTransition
					in={contacts.length > 1}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit>
					
					<Filter />
				</CSSTransition>
				
				{
					loading && <LoaderSpinner />
				}
				
				<ContactsList />
				
				{
					idForEdit &&
					<Modal onClose={this.onCloseEditModal}>
						<ContactForm
							btnCaption='Edit contact'
							startName={this.props.editName}
							startNumber={this.props.editNumber}
							onSubmitContact={this.onSubmitEditContact}
						/>						
						{
							loading && <LoaderSpinner />
						}						
					</Modal>
				}
			</PhoneBookEl>
		);
	}
}

export default PhoneBook;