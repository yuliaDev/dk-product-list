import React from 'react';

const ListItem = () => {
	const soldCheckbox = ({ target: { checked } }) => {
		console.log('checked', checked);
	};

	return (
		<li className="list-group-item d-flex justify-content-between">
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={soldCheckbox} />
				<label className="form-check-label" htmlFor="flexCheckDefault">
					Default checkbox
				</label>
			</div>
			<button type="button" className="btn-close" aria-label="Close" />
		</li>
	);
};

export default ListItem;
