import React, { useState } from 'react';
import Autocomplete from '@/components/autocomplete/autocomplete';

const AddListItem = ({ list, addNewItem }) => {
	const [edit, setEdit] = useState(false);

	return (
		<li className="list-group-item d-flex justify-content-between">
			<div className="d-flex">
				<div className="add-item-plus-icon">+</div>
				<Autocomplete suggestions={list} addNewItem={addNewItem} />
			</div>
		</li>
	);
};

export default AddListItem;
