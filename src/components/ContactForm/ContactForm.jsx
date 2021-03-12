import PropTypes from 'prop-types';
import { Component } from 'react';

import { Form, Label, Input, Button } from './ContactForm.css';

class ContactForm extends Component {
	static propTypes = {
		name: PropTypes.string,
		number: PropTypes.string,
	}
	
	state = {
		name: '',
		number: ''
	}

	componentDidMount() {
		const { startName, startNumber } = this.props;
		this.setState(
			{
				name: startName,
				number: startNumber
			}
		)
	}

	onInputChange = event => {
    const { name, value } = event.target;
		this.setState(
      { [name]: value }
    )
	}

	onSubmit = event => {
		event.preventDefault();

		const { name, number } = this.state;
		const { onSubmitContact } = this.props;
		
		if (onSubmitContact(name, number)) {
			this.setState({ name: '', number: '' });
		}
	}

	render() {
		const { name, number } = this.state;
		const { btnCaption } = this.props;

		return (
			<Form onSubmit={this.onSubmit}>
				<Label>
					Name
					<Input type="text" name="name" value={name} onChange={this.onInputChange}/>
				</Label>

				<Label>
					Number
					<Input type="tel" name="number" value={number} onChange={this.onInputChange}/>
				</Label>

				<Button type="submit">{btnCaption}</Button>
			</Form>
		)
	}
}

ContactForm.propTypes = {
	name: PropTypes.string, 
	number: PropTypes.string, 
	onInputChange: PropTypes.func, 
	onSubmit: PropTypes.func
}

export default ContactForm;