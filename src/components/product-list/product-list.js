import React, { useState, useEffect } from 'react';
import ListItem from '@/components/product-list/list-item/list-item';
import AddListItem from '@/components/product-list/add-list-item/add-list-item';

import './product-list.scss';

const ProductList = ({ dictionary = [] }) => {
	const [list, setList] = useState([...dictionary]);
	const [toDoList, setToDoList] = useState([]);
	const [doneList, setDoneList] = useState(null);

	// useEffect(() => {
	// 	setList(dictionary);
	// }, []);

	const addNewItem = (newItem) => {
		setToDoList([...toDoList, newItem]);
		setList(list.filter((item) => item.title !== newItem.title));
	};

	return (
		<div className="product-list">
			<div className="row">
				<div className="col-12">
					<div>{JSON.stringify(toDoList)}</div>
					<ul className="list-group">
						<ListItem />
						<AddListItem list={list} addNewItem={addNewItem} />
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-12">Done</div>
			</div>
			{/*<div>{JSON.stringify(list}</div>*/}
		</div>
	);
};

export default ProductList;
