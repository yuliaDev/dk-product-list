import React, { useState } from 'react';
import Autocomplete from '@/components/autocomplete/autocomplete';

const AddListItem = () => {
	const [edit, setEdit] = useState(false);
	const testlist = ['хліб', 'молоко', 'кава', 'чай', 'масло', 'майонез', 'ковбаса'];

	return (
		<li className="list-group-item d-flex justify-content-between">
			<div className="d-flex">
				<div className="add-item-plus-icon">+</div>
				<Autocomplete suggestions={testlist} />
			</div>
		</li>
	);
};

export default AddListItem;
