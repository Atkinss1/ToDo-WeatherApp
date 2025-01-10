import PropTypes from 'prop-types';

export const DropdownMenu = ({ onFilterChange }) => {
	const handleSelectedValue = (e) => {
		onFilterChange(e.target.value);
	};

	return (
		<div className='dropdown-menu'>
			<label htmlFor='dropdown' className='dropdown-label'>Sort list by: </label>
			<select
				onChange={handleSelectedValue}
			>
				<option defaultValue='all'>All</option>
				<option value='completed'>Completed</option>
				<option value='incomplete'>Incomplete</option>
			</select>
		</div>
	);
};

DropdownMenu.propTypes =  {
  onFilterChange: PropTypes.func.isRequired
}