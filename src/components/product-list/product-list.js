import React, { useState } from 'react';
import ListItem from '@/components/product-list/list-item/list-item';
import AddListItem from '@/components/product-list/add-list-item/add-list-item';

import './product-list.css';

const ProductList = ({
	dictionary = [],
	placeholder = 'list item',
	toDoListClass = 'dk-todo-list',
	doneListClass = 'dk-done-list',
}) => {
	const [list, setList] = useState([...dictionary]);
	const [toDoList, setToDoList] = useState([]);
	const [doneList, setDoneList] = useState([]);

	const isInList = (item, set) => {
		return set.some((i) => i.title === item.title);
	};

	const hasChildren = (set, item) => {
		return set.filter((el) => el.parent === item.title);
	};

	const moveFromSourceListToTarget = (selectedItem, sourceList, setSourceList, targetList, setTargetList) => {
		if (selectedItem.parent && selectedItem.parent.length) {
			const [parentItem] = sourceList.filter((item) => item.title === selectedItem.parent);
			if (!isInList(selectedItem, targetList)) {
				if (isInList(parentItem, targetList)) {
					setTargetList([...targetList, selectedItem]);
				} else {
					setTargetList([...targetList, selectedItem, parentItem]);
				}
				setSourceList(sourceList.filter((item) => item.title !== selectedItem.title));
			}
		} else {
			if (hasChildren(sourceList, selectedItem).length) {
				const children = hasChildren(sourceList, selectedItem);
				let arr = [selectedItem];
				let leftList = sourceList.filter((item) => item.title !== selectedItem.title);
				children.map((el) => {
					if (!isInList(el, targetList)) {
						arr.push(el);
						leftList = leftList.filter((item) => item.title !== el.title);
					}
				});
				setTargetList([...targetList, ...arr]);
				setSourceList(leftList);
			} else {
				setTargetList([...targetList, selectedItem]);
				setSourceList(sourceList.filter((item) => item.title !== selectedItem.title));
			}
		}
	};

	const addNewItem = (newItem) => {
		moveFromSourceListToTarget(newItem, list, setList, toDoList, setToDoList);
	};

	const moveToDone = (item) => {
		moveFromSourceListToTarget(item, toDoList, setToDoList, doneList, setDoneList);
	};

	const moveFromDoneToTodo = (item) => {
		moveFromSourceListToTarget(item, doneList, setDoneList, toDoList, setToDoList);
	};

	const deleteFromToDoList = (item) => {
		moveFromSourceListToTarget(item, toDoList, setToDoList, list, setList);
	};

	const deleteFromDoneList = (item) => {
		moveFromSourceListToTarget(item, doneList, setDoneList, list, setList);
	};

	return (
		<div className="product-list">
			<div className="row">
				<div className="col-12">
					<ul className="list-group">
						{toDoList.map((item) => {
							if (!item.parent) {
								return (
									<>
										<ListItem
											item={item}
											key={item.name}
											onHandleCheck={moveToDone}
											deleteFromList={deleteFromToDoList}
										/>
										{hasChildren(toDoList, item) && hasChildren(toDoList, item).length
											? hasChildren(toDoList, item).map((el) => {
													return (
														<ListItem
															item={el}
															key={el.name}
															onHandleCheck={moveToDone}
															subcategoryStyle={{ paddingLeft: '40px' }}
															deleteFromList={deleteFromToDoList}
														/>
													);
											  })
											: null}
									</>
								);
							}
						})}
						<AddListItem list={list} addNewItem={addNewItem} placeholder={placeholder} />
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-12">Done</div>
			</div>
			<div className="row">
				<div className="col-12">
					{doneList && (
						<ul className="list-group">
							{doneList.map((item) => {
								if (!item.parent) {
									return (
										<>
											<ListItem
												item={item}
												key={item.name}
												onHandleCheck={moveFromDoneToTodo}
												deleteFromList={deleteFromDoneList}
											/>
											{hasChildren(doneList, item) && hasChildren(doneList, item).length
												? hasChildren(doneList, item).map((el) => {
														return (
															<ListItem
																item={el}
																key={el.name}
																onHandleCheck={moveFromDoneToTodo}
																subcategoryStyle={{ paddingLeft: '40px' }}
																deleteFromList={deleteFromDoneList}
															/>
														);
												  })
												: null}
										</>
									);
								}
							})}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
