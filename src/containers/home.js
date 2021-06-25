import React from 'react';

import ProductList from '@/components/product-list/product-list';

export const Home = () => {
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
					<ProductList dictionary={testList} toDoListTitle="TODO LIST" doneListTitle="DONE LIST" />
				</div>
			</div>
		</div>
	);
};
