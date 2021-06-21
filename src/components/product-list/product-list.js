import React, { useState, useEffect } from 'react';
import ListItem from '@/components/product-list/list-item/list-item';
import AddListItem from '@/components/product-list/add-list-item/add-list-item';

import './product-list.scss';

const ProductList = ({ dictionary = [] }) => {
	const [list, setList] = useState([...dictionary]);
	const [toDoList, setToDoList] = useState([]);
	const [doneList, setDoneList] = useState(null);

	const isInList = (item) => {
		return toDoList.some((i) => i.title === item.title);
	};

	const hasChildren = (item) => {
		return list.filter((el) => el.parent === item.title);
	};

	const addNewItem = (newItem) => {
		if (newItem.parent && newItem.parent.length) {
			const [parentItem] = list.filter((item) => item.title === newItem.parent);
			if (!isInList(newItem)) {
				if (isInList(parentItem)) {
					setToDoList([...toDoList, newItem]);
				} else {
					setToDoList([...toDoList, newItem, parentItem]);
				}
				setList(list.filter((item) => item.title !== newItem.title));
			}
		} else {
			if (hasChildren(newItem).length) {
				const children = hasChildren(newItem);
				let arr = [newItem];
				let leftList = list.filter((item) => item.title !== newItem.title);
				children.map((el) => {
					if (!isInList(el)) {
						arr.push(el);
						leftList = leftList.filter((item) => item.title !== el.title);
					}
				});
				setToDoList([...toDoList, ...arr]);
				setList(leftList);
			} else {
				setToDoList([...toDoList, newItem]);
				setList(list.filter((item) => item.title !== newItem.title));
			}
		}
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
			<div>{JSON.stringify(list)}</div>
		</div>
	);
};

export default ProductList;
