import { connect } from 'react-redux';

import * as phonebookSelectors from '../../redux/phoneBook/phonebook-selectors';
import * as actions from '../../redux/phoneBook/phoneBook-actions';

import Filter from './Filter';

const mapStateToProps = state => ({
  filter: phonebookSelectors.getFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
	changeFilter: event => dispatch(actions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);