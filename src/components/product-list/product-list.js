import React from 'react';
import ListItem from '@/components/product-list/list-item/list-item';
import AddListItem from '@/components/product-list/add-list-item/add-list-item';

import './product-list.scss';

const ProductList = () => {
	return (
		<div className="product-list">
			<div className="row">
				<div className="col-12">
					<ul className="list-group">
						<ListItem />
						<AddListItem />
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-12">Done</div>
			</div>
		</div>
	);
};

export default ProductList;
