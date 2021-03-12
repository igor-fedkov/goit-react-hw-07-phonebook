import PropTypes from 'prop-types';

import { Label, Input, Container } from './Filter.css';

const Filter = ({ filter, changeFilter }) => {
	return (
		<Container>
			<Label>
				Find contacts by name
				<Input type="text" name="filter" value={filter} onChange={changeFilter}/>
			</Label>
		</Container>
	)
}

Filter.propTypes = {
	filter: PropTypes.string,
	changeFilter: PropTypes.func
}

export default Filter;