import React from 'react';

import ProductList from '@/components/product-list/product-list';

export const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>Product List</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<ProductList />
				</div>
			</div>
		</div>
	);
};
