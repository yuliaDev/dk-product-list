import React from 'react';

import Autocomplete from '../components/autocomplete/autocomplete';

export const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<h1>Product List</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-sm">
					<Autocomplete suggestions={['app', 'store']} />
				</div>
			</div>
		</div>
	);
};
