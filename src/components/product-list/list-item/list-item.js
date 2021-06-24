import React from 'react';

const ListItem = ({ item, subcategoryStyle = {}, onHandleCheck, deleteFromList }) => {
	const { title } = item;
	const handleCheck = () => {
		onHandleCheck(item);
	};

	const deleteItem = () => {
		deleteFromList(item);
	};

	return (
		<li className="list-group-item d-flex justify-content-between" style={subcategoryStyle}>
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={handleCheck} />
				<label className="form-check-label" htmlFor="flexCheckDefault">
					{title}
				</label>
			</div>
			<button type="button" className="btn-close" aria-label="Close" onClick={deleteItem} />
		</li>
	);
};

export default ListItem;
