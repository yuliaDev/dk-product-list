import React from 'react';

import ProductList from '@/components/product-list/product-list';

export const Home = () => {
	// const testlist = ['хліб', 'молоко', 'кава', 'чай', 'масло', 'майонез', 'ковбаса', 'цукор', 'сіль', 'гречка', 'рис'];
	const testList = [
		{ title: 'хліб', parent: '' },
		{ title: 'батон', parent: 'хліб' },
		{ title: 'булки', parent: 'хліб' },
		{ title: 'молоко' },
		{ title: 'кава' },
		{ title: 'чай' },
		{ title: 'масло' },
		{ title: 'майонез' },
	];

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>Product List</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<ProductList dictionary={testList} />
				</div>
			</div>
		</div>
	);
};
